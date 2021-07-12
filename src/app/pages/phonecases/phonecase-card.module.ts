import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PhonecaseCardComponent } from './phonecase-card.component';



@NgModule({
  declarations: [PhonecaseCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule
  ],
  exports: [PhonecaseCardComponent]
})
export class PhonecaseCardModule { }
