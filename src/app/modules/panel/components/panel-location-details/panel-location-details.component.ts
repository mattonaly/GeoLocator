import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Location } from '../../models/location.interface';

@Component({
  selector: 'app-panel-location-details',
  standalone: true,
  templateUrl: './panel-location-details.component.html',
  styleUrl: './panel-location-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLocationDetailsComponent {
  @Input() label = 'Location details';
  @Input({ required: true }) location: Location | null = null;
}
