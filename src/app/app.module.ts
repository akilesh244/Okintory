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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomepageComponent,
    FooterComponent,
    TestimonialsComponent,
    NewArrivalsComponent,
    AdvtBannerComponent,
    ShopCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
