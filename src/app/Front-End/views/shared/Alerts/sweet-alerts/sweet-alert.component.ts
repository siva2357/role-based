import { Component } from '@angular/core';
import { AlertService } from 'src/app/Front-End/core/services/alerts.service';


@Component({
  selector: 'app-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent {

  constructor(private alertService: AlertService) {}

  // Methods to trigger alerts
  showSignupAllDetailsAlert() {
    this.alertService.showSignupAllDetailsAlert();
  }

  showSignupFullNameAlert() {
    this.alertService.showSignupFullNameAlert();
  }

  showSignupSurnameAlert() {
    this.alertService.showSignupSurnameAlert();
  }

  showSignupEmailAlert() {
    this.alertService.showSignupEmailAlert();
  }

  showSignupValidEmailAlert() {
    this.alertService.showSignupValidEmailAlert();
  }

  showSignupPasswordAlert() {
    this.alertService.showSignupPasswordAlert();
  }

  showSignupPasswordMatchAlert() {
    this.alertService.showSignupPasswordMatchAlert();
  }

  showProfileImageAlert() {
    this.alertService.showProfileImageAlert();
  }

  showProfileImageFormatAlert() {
    this.alertService.showProfileImageFormatAlert();
  }

  showOtpVerificationAlert() {
    this.alertService.showOtpVerificationAlert();
  }

  showOtpInvalidAlert() {
    this.alertService.showOtpInvalidAlert();
  }

  showAccountRegisteredSuccess() {
    this.alertService.showAccountRegisteredSuccess();
  }

  showOtpVerifiedSuccess() {
    this.alertService.showOtpVerifiedSuccess();
  }

  showAccountVerifiedSuccess() {
    this.alertService.showAccountVerifiedSuccess();
  }

  showWelcomeSuccess() {
    this.alertService.showWelcomeSuccess();
  }

  showLoginSuccess() {
    this.alertService.showLoginSuccess();
  }

}
