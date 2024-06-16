import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchHistoryComponent } from './panel-search-history.component';

describe('PanelSearchHistoryComponent', () => {
  let component: PanelSearchHistoryComponent;
  let fixture: ComponentFixture<PanelSearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSearchHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
