import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLocationDetailsComponent } from './panel-location-details.component';

describe('PanelLocationDetailsComponent', () => {
  let component: PanelLocationDetailsComponent;
  let fixture: ComponentFixture<PanelLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelLocationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
