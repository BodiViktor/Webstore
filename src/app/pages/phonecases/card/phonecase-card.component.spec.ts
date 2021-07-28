import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseCardComponent } from './phonecase-card.component';

describe('PhonecaseCardComponent', () => {
  let component: PhonecaseCardComponent;
  let fixture: ComponentFixture<PhonecaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
