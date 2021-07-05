import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { StoreComponent } from './pages/store/store.component';
import { ProductlistComponent } from './pages/store/productlist/productlist.component';
import { ProductitemComponent } from './pages/store/productlist/productitem/productitem.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountComponent } from './pages/account/account.component';
import { OnHoverDirective } from './shared/directives/on-hover/on-hover.directive';
import { PhonecaseCardComponent } from './pages/phonecases/phonecase-card.component';
import { PowerbankCardComponent } from './pages/powerbanks/powerbank-card.component';
import { OthersCardComponent } from './pages/other-products/others-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StoreComponent,
    ProductlistComponent,
    ProductitemComponent,
    CartComponent,
    AccountComponent,
    OnHoverDirective,
    PhonecaseCardComponent,
    PowerbankCardComponent,
    OthersCardComponent,
    LoginComponent,
    RegistrationComponent,
    SplashScreenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
