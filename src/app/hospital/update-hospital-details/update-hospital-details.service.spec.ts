import { TestBed } from '@angular/core/testing';

import { UpdateHospitalDetailsService } from './update-hospital-details.service';

describe('UpdateHospitalDetailsService', () => {
  let service: UpdateHospitalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHospitalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
