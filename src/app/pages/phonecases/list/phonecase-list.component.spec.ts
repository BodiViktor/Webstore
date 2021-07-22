import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseListComponent } from './phonecase-list.component';

describe('PhonecaseListComponent', () => {
  let component: PhonecaseListComponent;
  let fixture: ComponentFixture<PhonecaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonecaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
