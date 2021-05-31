import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemCardComponent } from 'src/app/item-card/item-card.component'



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,ItemCardComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
