import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularSplitModule } from 'angular-split';

import { PanelLocationDetailsComponent } from './components/panel-location-details/panel-location-details.component';
import { PanelLocationMapComponent } from './components/panel-location-map/panel-location-map.component';
import { PanelSearchHistoryComponent } from './components/panel-search-history/panel-search-history.component';
import { PanelSearchInputComponent } from './components/panel-search-input/panel-search-input.component';
import { PanelSearchSubmitComponent } from './components/panel-search-submit/panel-search-submit.component';
import { PanelApiService } from './services/panel-api.service';
import { PanelService } from './services/panel.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AngularSplitModule,
    MatSnackBarModule,
    PanelSearchHistoryComponent,
    PanelSearchInputComponent,
    PanelSearchSubmitComponent,
    PanelLocationMapComponent,
    PanelLocationDetailsComponent,
  ],
  providers: [PanelService, PanelApiService],
  styleUrl: './panel.component.scss',
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {
  protected readonly panelService = inject(PanelService);

  public myLocation = this.panelService.myLocation;
  public searchedLocation = this.panelService.searchedLocation;

  public ngOnInit(): void {
    this.panelService.getMyLocation();
  }
}
