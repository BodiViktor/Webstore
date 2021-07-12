import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { PhonecaseAddModule } from '../admin/phonecase-add/phonecase-add.module';
import { PhonecaseCardComponent } from '../phonecases/phonecase-card.component';
import { PhonecaseCardModule } from '../phonecases/phonecase-card.module';



@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule, PhonecaseCardModule
  ],
  exports: [FavoriteComponent]
})
export class FavoriteModule { }
