import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherpageComponent } from './anotherpage.component';

describe('AnotherpageComponent', () => {
  let component: AnotherpageComponent;
  let fixture: ComponentFixture<AnotherpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherpageComponent]
    });
    fixture = TestBed.createComponent(AnotherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
