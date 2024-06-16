import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchInputComponent } from './panel-search-input.component';

describe('PanelSearchInputComponent', () => {
  let component: PanelSearchInputComponent;
  let fixture: ComponentFixture<PanelSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSearchInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
