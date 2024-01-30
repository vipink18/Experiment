import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBookingsComponent } from './previous-bookings.component';

describe('PreviousBookingsComponent', () => {
  let component: PreviousBookingsComponent;
  let fixture: ComponentFixture<PreviousBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousBookingsComponent]
    });
    fixture = TestBed.createComponent(PreviousBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
