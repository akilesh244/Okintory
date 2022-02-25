import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: 'Okizon',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'Okizon',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginPageComponent
  },
  {
    path: 'Registration',
    component: RegistrationPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
