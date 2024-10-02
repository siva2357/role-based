import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Front-End/views/pages/login/login.component';
import { RegisterComponent } from './Front-End/views/pages/register/register.component';


import { AdminComponent } from './Front-End/views/pages/admin/admin.component';

import { RegisterSeekerComponent } from './Front-End/views/pages/seeker-pages/register-seeker/register-seeker.component';
import { SeekerComponent } from './Front-End/views/pages/seeker-pages/seeker/seeker.component';
import { SeekerConfirmationComponent } from './Front-End/views/pages/seeker-pages/seeker-account-confirmation/seeker-account-confirmation.component';

import { RegisterRecruiterComponent } from './Front-End/views/pages/recruiter-pages/register-recruiter/register-recruiter.component';
import { RecruiterComponent } from './Front-End/views/pages/recruiter-pages/recruiter/recruiter.component';
import { RecruiterConfirmationComponent } from './Front-End/views/pages/recruiter-pages/recruiter-account-confirmation/recruiter-account-confirmation.component';



// shared components
import { SweetAlertComponent } from './Front-End/views/shared/Alerts/sweet-alerts/sweet-alert.component';
import { RegistrationFormComponent } from './Front-End/views/shared/registration-form/registration-form.component';
import { LoaderComponent } from './Front-End/views/shared/Alerts/loader/loader.component';
import { HeaderComponent } from './Front-End/views/shared/header/header.component';
import { RegistrationConfirmationComponent } from './Front-End/views/shared/confirmation-page/confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    SeekerComponent,
    RecruiterComponent,
    HeaderComponent,
    LoaderComponent,
    RegisterSeekerComponent,
    RegisterRecruiterComponent,
    SweetAlertComponent,
    RegistrationFormComponent,
    RecruiterConfirmationComponent,
    RegistrationConfirmationComponent,
    SeekerConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
