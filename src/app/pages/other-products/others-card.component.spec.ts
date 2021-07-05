import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersCardComponent } from './others-card.component';

describe('OthersCardComponent', () => {
  let component: OthersCardComponent;
  let fixture: ComponentFixture<OthersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
