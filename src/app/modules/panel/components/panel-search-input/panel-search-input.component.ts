import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PanelService } from '../../services/panel.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-search-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './panel-search-input.component.html',
  styleUrl: './panel-search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelSearchInputComponent {
  protected readonly panelService = inject(PanelService);

  public control = this.panelService.searchControl;

  submit(): void {
    this.panelService.submit();
  }
}
