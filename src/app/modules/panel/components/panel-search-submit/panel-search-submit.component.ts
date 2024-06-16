import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-panel-search-submit',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './panel-search-submit.component.html',
  styleUrl: './panel-search-submit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelSearchSubmitComponent {
  protected readonly panelService = inject(PanelService);

  submit(): void {
    this.panelService.submit();
  }
}
