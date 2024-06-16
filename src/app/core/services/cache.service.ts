import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  protected readonly cacheKey = 'storageCashe';
  protected readonly sessionStorage = inject(SessionStorageService);
  private cache = this.getFromSessionStorage();

  get(req: HttpRequest<unknown>): HttpResponse<unknown> | undefined {
    console.log(`Getting from cache: ${req.urlWithParams}`);
    return this.cache.get(req.urlWithParams);
  }

  put(req: HttpRequest<unknown>, response: HttpResponse<unknown>): void {
    this.cache.set(req.urlWithParams, response);
    this.saveToSessionStorage();
  }

  clear(): void {
    this.cache.clear();
    this.saveToSessionStorage();
  }

  private getFromSessionStorage(): Map<string, HttpResponse<unknown>> {
    console.log(`Getting from session storage: ${this.cacheKey}`);
    const item = this.sessionStorage.getItem<
      Map<string, HttpResponse<unknown>>
    >(this.cacheKey);
    return item ? new Map(item) : new Map();
  }

  private saveToSessionStorage(): void {
    console.log('Saved cache to session storage');
    this.sessionStorage.setItem(
      this.cacheKey,
      Array.from(this.cache.entries()),
    );
  }
}
