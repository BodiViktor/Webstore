import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
<<<<<<< HEAD
import { ItemCardComponent } from './item-card/item-card.component';
import {MatCardModule} from '@angular/material/card';
=======
import { HomeComponent } from './pages/home/home.component';
>>>>>>> eefaee1293891febd2d2188eb30b44fa54489cc7

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    ItemCardComponent
=======
    HomeComponent
>>>>>>> eefaee1293891febd2d2188eb30b44fa54489cc7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
