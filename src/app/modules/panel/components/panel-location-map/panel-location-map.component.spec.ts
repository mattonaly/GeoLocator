import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLocationMapComponent } from './panel-location-map.component';

describe('PanelLocationMapComponent', () => {
  let component: PanelLocationMapComponent;
  let fixture: ComponentFixture<PanelLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelLocationMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
