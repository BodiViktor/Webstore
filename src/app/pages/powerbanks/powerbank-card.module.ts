import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerbankCardComponent } from './powerbank-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PowerbankCardComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [PowerbankCardComponent]
})
export class PowerbankCardModule { }
