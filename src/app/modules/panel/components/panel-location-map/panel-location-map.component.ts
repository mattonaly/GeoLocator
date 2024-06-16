import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { latLng, Marker, marker, tileLayer } from 'leaflet';

import { Location } from '../../models/location.interface';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-panel-location-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './panel-location-map.component.html',
  styleUrl: './panel-location-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLocationMapComponent {
  @Input() label = 'Map location';
  @Input({ required: true })
  public set location(value: Location | null) {
    if (!value) {
      return;
    }

    this.setLocation(value.latitude, value.longitude);
  }

  protected readonly panelService = inject(PanelService);

  map!: L.Map;
  options = signal({
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}),
    ],
    zoom: 10,
    center: latLng(0, 0),
  });
  layers: WritableSignal<Marker[]> = signal([]);

  onMapReady(map: L.Map) {
    this.map = map;
  }

  private setLocation(latitude: number, longitude: number) {
    if (!latitude || !longitude) {
      return;
    }

    this.options.update((options) => ({
      ...options,
      center: latLng(latitude, longitude),
    }));
    this.layers.set([marker([latitude, longitude])]);

    if (this.map) {
      this.map.panTo([latitude, longitude]);
      this.map.addLayer(marker([latitude, longitude]));
    }
  }
}
