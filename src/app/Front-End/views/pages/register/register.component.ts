import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isUserTypeSelected = false;
  selectedUserType: string | null = null;

  constructor(private router: Router) {}

  selectUserType(userType: string) {
    this.selectedUserType = userType;
    this.isUserTypeSelected = true;
  }

  login() {
    this.router.navigate(['app/login']); // Corrected navigation
  }

  navigateToRegistration() {
    if (this.selectedUserType === 'seeker') {
      this.router.navigate(['app/register/seeker']);
    } else if (this.selectedUserType === 'recruiter') {
      this.router.navigate(['app/register/recruiter']);
    }
  }
}
