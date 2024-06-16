import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-panel-search-history',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatTooltipModule],
  templateUrl: './panel-search-history.component.html',
  styleUrl: './panel-search-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelSearchHistoryComponent {
  protected readonly panelService = inject(PanelService);

  public searchHistory = computed(() =>
    this.panelService.searchHistory().reverse(),
  );

  applySearch(search: string): void {
    this.panelService.getByIpOrUrl(search);
  }
}
