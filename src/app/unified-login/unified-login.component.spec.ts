import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedLoginComponent } from './unified-login.component';

describe('UnifiedLoginComponent', () => {
  let component: UnifiedLoginComponent;
  let fixture: ComponentFixture<UnifiedLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnifiedLoginComponent]
    });
    fixture = TestBed.createComponent(UnifiedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
