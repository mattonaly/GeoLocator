import { DestroyRef, inject, Injectable, Signal, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Location } from '../models/location.interface';
import { PanelApiService } from './panel-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SessionStorageService } from '../../../core/services/session-storage.service';
import { FormControl, Validators } from '@angular/forms';
import { patterns } from '../../../shared/const/patterns.const';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PanelService {
  protected readonly searchHistoryKey = 'searchHistory';

  protected readonly panelApiService = inject(PanelApiService);
  protected readonly destroyRef = inject(DestroyRef);
  protected readonly sessionStorage = inject(SessionStorageService);
  protected readonly snackbar = inject(MatSnackBar);

  private _searchHistory = signal(this.getSearchHistory());
  public searchHistory: Signal<string[]> = this._searchHistory.asReadonly();

  private _myLocation = signal<Location | null>(null);
  public myLocation: Signal<Location | null> = this._myLocation.asReadonly();

  private _searchedLocation = signal<Location | null>(null);
  public searchedLocation: Signal<Location | null> =
    this._searchedLocation.asReadonly();

  public searchControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(patterns.ipOrUrl),
  ]);

  submit(): void {
    this.searchControl.markAsTouched();

    if (this.searchControl.invalid || !this.searchControl.value) {
      return;
    }

    this.getByIpOrUrl(this.searchControl.value);
    this.addToSearchHistory(this.searchControl.value);
    this.searchControl.reset();
  }

  getSearchHistory(): string[] {
    const searchHistory = this.sessionStorage.getItem<string[]>(
      this.searchHistoryKey,
    );
    return searchHistory ? searchHistory : [];
  }

  getMyLocation(): void {
    this.panelApiService
      .getMyLocation()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (location) => this._myLocation.set(location),
        error: (error) => this.handleError(error),
      });
  }

  getByIpOrUrl(search: string): void {
    this.panelApiService
      .getByIpOrUrl(search)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (location) => this._searchedLocation.set(location),
        error: (error) => this.handleError(error),
      });
  }

  private addToSearchHistory(search: string): void {
    const searchHistory = this.getSearchHistory();
    searchHistory.push(search);
    this._searchHistory.set(searchHistory);
    this.sessionStorage.setItem(this.searchHistoryKey, searchHistory);
  }

  private handleError(error: Error): void {
    this.snackbar.open(error.message, 'Close', {
      duration: 5000,
    });
  }
}
