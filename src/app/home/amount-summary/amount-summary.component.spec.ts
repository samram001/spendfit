import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountSummaryComponent } from './amount-summary.component';

describe('AmountSummaryComponent', () => {
  let component: AmountSummaryComponent;
  let fixture: ComponentFixture<AmountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
