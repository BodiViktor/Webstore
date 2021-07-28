import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonecaseListComponent } from './phonecase-list.component';

const routes: Routes = [
  {
    path: '',
    component: PhonecaseListComponent,
    data: { title: 'Phonecases - TITLE' }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PhonecaseListRoutingModule { }