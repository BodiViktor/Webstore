import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonecaseAddComponent } from './phonecase-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [PhonecaseAddComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatIconModule, MatInputModule, MatDialogModule, MatButtonModule,
  ],
  exports: [PhonecaseAddComponent]
})
export class PhonecaseAddModule { }
