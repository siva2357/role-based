import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Front-End/views/pages/login/login.component';
import { RegisterComponent } from './Front-End/views/pages/register/register.component';


import { RegisterSeekerComponent } from './Front-End/views/pages/seeker-pages/register-seeker/register-seeker.component';
import { RegisterRecruiterComponent } from './Front-End/views/pages/recruiter-pages/register-recruiter/register-recruiter.component';

import { AdminComponent } from './Front-End/views/pages/admin/admin.component';
import { SeekerComponent } from './Front-End/views/pages/seeker-pages/seeker/seeker.component';
import { RecruiterComponent } from './Front-End/views/pages/recruiter-pages/recruiter/recruiter.component';




import { SweetAlertComponent } from './Front-End/views/shared/Alerts/sweet-alerts/sweet-alert.component';
import { LoaderComponent } from './Front-End/views/shared/Alerts/loader/loader.component';
import { RegistrationFormComponent } from './Front-End/views/shared/registration-form/registration-form.component';
import { HeaderComponent } from './Front-End/views/shared/header/header.component';
import { RegistrationConfirmationComponent } from './Front-End/views/shared/confirmation-page/confirmation-page.component';

import { RecruiterConfirmationComponent } from './Front-End/views/pages/recruiter-pages/recruiter-account-confirmation/recruiter-account-confirmation.component';
import { SeekerConfirmationComponent } from './Front-End/views/pages/seeker-pages/seeker-account-confirmation/seeker-account-confirmation.component';



import { RoleGuard } from './Front-End/core/guards/role.guard';
import { AuthGuard } from './Front-End/core/guards/auth.guard';


const routes: Routes = [



  { path: 'app/login', component: LoginComponent },
  { path: 'app/register', component: RegisterComponent },

  
  // Admin
  // { path: 'app/admin', component: AdminComponent },
  { path: 'app/main/admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },

  // Seeker
  // { path: 'app/main/seeker', component: SeekerComponent },
  { path: 'app/main/seeker', component: SeekerComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'seeker' } },
  { path: 'app/register/seeker', component: RegisterSeekerComponent },
  { path: 'app/register/seeker/account-confirmation', component: SeekerConfirmationComponent},
  
 // Recruiter
  // { path: 'app/main/recruiter', component: RecruiterComponent },
  { path: 'app/main/recruiter', component: RecruiterComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'recruiter' } },
  { path: 'app/register/recruiter',component: RegisterRecruiterComponent},
  { path: 'app/register/recruiter/account-confirmation',component: RecruiterConfirmationComponent},
  
  //Sahred components
  { path: 'app/alerts', component: SweetAlertComponent },
  { path: 'app/loader', component: LoaderComponent },
  { path: 'app/register-form',component: RegistrationFormComponent},
  { path: 'app/header',component: HeaderComponent},
  { path: 'app/registration-confirmation',component: RegistrationConfirmationComponent},

  { path: '', redirectTo: '/app/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/app/login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
