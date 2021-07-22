import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbankListComponent } from './powerbank-list.component';

describe('PowerbankListComponent', () => {
  let component: PowerbankListComponent;
  let fixture: ComponentFixture<PowerbankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerbankListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerbankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
