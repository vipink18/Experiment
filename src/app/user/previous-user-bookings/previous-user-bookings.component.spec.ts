import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousUserBookingsComponent } from './previous-user-bookings.component';

describe('PreviousUserBookingsComponent', () => {
  let component: PreviousUserBookingsComponent;
  let fixture: ComponentFixture<PreviousUserBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousUserBookingsComponent]
    });
    fixture = TestBed.createComponent(PreviousUserBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
