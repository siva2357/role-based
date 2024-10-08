import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConfirmationComponent } from './confirmation-page.component';

describe('HeaderComponent', () => {
  let component: RegistrationConfirmationComponent;
  let fixture: ComponentFixture<RegistrationConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationConfirmationComponent]
    });
    fixture = TestBed.createComponent(RegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
