import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { convertKeysToCamelCase } from '../../../shared/utils/utils';
import { Location, LocationResponse } from '../models/location.interface';

@Injectable()
export class PanelApiService {
  protected readonly apiUrl = environment.apiUrl;
  protected readonly apiKey = environment.apiKey;

  protected readonly httpClient = inject(HttpClient);

  getMyLocation(): Observable<Location> {
    return this.httpClient
      .get<Location>(`${this.apiUrl}/check`, { params: this.requestParams() })
      .pipe(
        map((response) => convertKeysToCamelCase(response)),
        this.handleApiResponse<Location>,
      );
  }

  getByIpOrUrl(search: string): Observable<Location> {
    return this.httpClient
      .get<Location>(`${this.apiUrl}/${search}`, {
        params: this.requestParams(),
      })
      .pipe(
        map((response) => convertKeysToCamelCase(response)),
        this.handleApiResponse<Location>,
      );
  }

  private requestParams(): HttpParams {
    return new HttpParams().appendAll({
      ['access_key']: this.apiKey,
    });
  }

  private handleApiResponse<T>(
    response: Observable<LocationResponse>,
  ): Observable<T> {
    return response.pipe(
      map((res: LocationResponse) => {
        if (res.success === false) {
          throw new Error(res.error?.info);
        }
        return res as T;
      }),
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
