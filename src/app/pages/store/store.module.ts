import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [StoreComponent],
  imports: [
    StoreRoutingModule, CommonModule, NavbarModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
