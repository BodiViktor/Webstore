import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PhonecaseCardComponent } from './phonecase-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';



@NgModule({
  declarations: [PhonecaseCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [PhonecaseCardComponent]
})
export class PhonecaseCardModule { }
