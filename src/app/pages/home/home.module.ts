import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeProductsComponent } from './home-products/home-products/home-products.component';



@NgModule({
  declarations: [HomeComponent, HomeProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
