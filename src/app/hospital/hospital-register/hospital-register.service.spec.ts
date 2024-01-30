import { TestBed } from '@angular/core/testing';

import { HospitalRegisterService } from './hospital-register.service';

describe('HospitalRegisterService', () => {
  let service: HospitalRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
