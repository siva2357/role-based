import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
  signupDetails!: FormGroup;
  profileDetails!: FormGroup;

  step = 1;
  profileUploadUrl: string | ArrayBuffer | null = null;
  isImageUploaded: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.signupDetails = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z ]*$/)]],
      userName: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.profileDetails = this.formBuilder.group({
      profileUpload: [null, Validators.required]
    });
  }

  get signup() { return this.signupDetails.controls; }
  get profile() { return this.profileDetails.controls; }

  next(): void {
    if (this.signupDetails.invalid) {
      return;
    }
    this.step++;
  }

  previous(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.profileUploadUrl = reader.result;
        this.isImageUploaded = true;
      };
      reader.readAsDataURL(file);
    }
  }


  submit(): void {
    if (this.signupDetails.valid && this.profileDetails.valid) {
      // Navigate to OTP verification page
      this.router.navigate(['app/register/otp-verification']);
    }
  }

  LoginPage(): void {
    this.router.navigate(['app/login']);
  }

  back(): void {
    this.router.navigate(['app/register']);
  }
}
