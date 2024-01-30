import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnearbyhospitalsComponent } from './viewnearbyhospitals.component';

describe('ViewnearbyhospitalsComponent', () => {
  let component: ViewnearbyhospitalsComponent;
  let fixture: ComponentFixture<ViewnearbyhospitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewnearbyhospitalsComponent]
    });
    fixture = TestBed.createComponent(ViewnearbyhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
