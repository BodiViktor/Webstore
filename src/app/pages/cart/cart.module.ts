import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule, NavbarModule, CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
