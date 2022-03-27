import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { FooterComponent } from './footer/footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials/testimonials.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals/new-arrivals.component';
import { AdvtBannerComponent } from './advertisement-banner/advt-banner/advt-banner.component';
import { ShopCollectionComponent } from './shop-collection/shop-collection/shop-collection.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page/registration-page.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopHomepageComponent } from './shop-homepage/shop-homepage.component';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopFooterComponent } from './shop-footer/shop-footer.component';
import { ShopCheckoutComponent } from './shop-checkout/shop-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomepageComponent,
    FooterComponent,
    TestimonialsComponent,
    NewArrivalsComponent,
    AdvtBannerComponent,
    ShopCollectionComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ShopHeaderComponent,
    ShopHomepageComponent,
    ShopDashboardComponent,
    ShopCartComponent,
    ShopFooterComponent,
    ShopCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
