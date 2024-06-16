import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchSubmitComponent } from './panel-search-submit.component';

describe('PanelSearchSubmitComponent', () => {
  let component: PanelSearchSubmitComponent;
  let fixture: ComponentFixture<PanelSearchSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSearchSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSearchSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
