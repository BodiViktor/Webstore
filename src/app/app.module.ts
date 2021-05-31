import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ItemCardComponent } from './item-card/item-card.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
=======
    MatCardModule
>>>>>>> c93217053779d0a07229a721923f980c8a7935ad
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
