import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersCardComponent } from './others-card.component';



@NgModule({
  declarations: [OthersCardComponent],
  imports: [
    CommonModule
  ],
  exports: [OthersCardComponent]
})
export class OthersCardModule { }
