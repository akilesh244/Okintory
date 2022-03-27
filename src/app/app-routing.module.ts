import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page/registration-page.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './shop-checkout/shop-checkout.component';
import { ShopHomepageComponent } from './shop-homepage/shop-homepage.component';

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
  { path:"cart", component:ShopCartComponent },
  { path:"checkout", component:ShopCheckoutComponent },
  { path:"shop", component:ShopHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
