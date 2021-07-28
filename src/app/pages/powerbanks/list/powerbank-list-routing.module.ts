import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PowerbankListComponent } from './powerbank-list.component';

const routes: Routes = [
  {
    path: '',
    component: PowerbankListComponent,
    data: { title: 'Powerbanks - TITLE' }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PowerbankListRoutingModule { }