import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

import { CacheService } from '../services/cache.service';

@Injectable()
export class CacheControlInterceptor implements HttpInterceptor {
  protected readonly cacheService = inject(CacheService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = req.clone({
      headers: new HttpHeaders({
        // 'Cache-Control': 'public, max-age=31536000',
        // Pragma: 'cache',
      }),
    });

    const cachedResponse = this.cacheService.get(req);
    if (cachedResponse) {
      console.log('Returning cached response', cachedResponse);
      return of(
        new HttpResponse({
          body: cachedResponse.body,
          headers: cachedResponse.headers,
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
          url: cachedResponse.url || req.url,
        }),
      );
    }

    return next.handle(clonedRequest).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          this.cacheService.put(req, event);
        }
      }),
    );
  }
}
