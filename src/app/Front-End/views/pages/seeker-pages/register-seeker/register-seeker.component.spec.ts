import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSeekerComponent } from './register-seeker.component';

describe('RegisterSeekerComponent', () => {
  let component: RegisterSeekerComponent;
  let fixture: ComponentFixture<RegisterSeekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSeekerComponent]
    });
    fixture = TestBed.createComponent(RegisterSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
