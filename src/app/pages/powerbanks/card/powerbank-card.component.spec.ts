import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbankCardComponent } from './powerbank-card.component';

describe('PowerbankCardComponent', () => {
  let component: PowerbankCardComponent;
  let fixture: ComponentFixture<PowerbankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerbankCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerbankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
