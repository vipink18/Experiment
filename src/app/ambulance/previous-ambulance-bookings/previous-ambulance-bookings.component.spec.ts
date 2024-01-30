import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAmbulanceBookingsComponent } from './previous-ambulance-bookings.component';

describe('PreviousAmbulanceBookingsComponent', () => {
  let component: PreviousAmbulanceBookingsComponent;
  let fixture: ComponentFixture<PreviousAmbulanceBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousAmbulanceBookingsComponent]
    });
    fixture = TestBed.createComponent(PreviousAmbulanceBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
