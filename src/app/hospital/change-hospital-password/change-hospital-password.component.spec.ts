import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHospitalPasswordComponent } from './change-hospital-password.component';

describe('ChangeHospitalPasswordComponent', () => {
  let component: ChangeHospitalPasswordComponent;
  let fixture: ComponentFixture<ChangeHospitalPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeHospitalPasswordComponent]
    });
    fixture = TestBed.createComponent(ChangeHospitalPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
