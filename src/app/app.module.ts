import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { SinleProductComponent } from './sinle-product/sinle-product.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProfilComponent,
    SinleProductComponent,
    NavComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
