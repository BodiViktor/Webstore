import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonecaseListComponent } from './phonecase-list.component';
import { PhonecaseListRoutingModule } from './phonecase-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PhonecaseCardModule } from '../card/phonecase-card.module';
import { ContainerModule } from 'src/app/shared/components/container.module';
import { DetailsModule } from '../../details/details.module';
import { MatIconModule } from '@angular/material/icon';
import { PhonecaseAddModule } from '../add/phonecase-add.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PhonecaseListComponent
  ],
  imports: [
    CommonModule, PhonecaseListRoutingModule, MatToolbarModule, ContainerModule, DetailsModule,
    MatIconModule, PhonecaseAddModule, PhonecaseCardModule, MatAutocompleteModule, MatInputModule,
    FormsModule, ReactiveFormsModule, MatButtonModule
  ]
})
export class PhonecaseListModule { }
