import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    DetailsRoutingModule, MatCardModule, MatButtonModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule
  ],
  exports: [DetailsComponent],
})
export class DetailsModule { }
