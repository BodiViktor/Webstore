import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container.module';
import { PowerbankListRoutingModule } from './powerbank-list-routing.module';
import { PowerbankListComponent } from './powerbank-list.component';
import { PowerbankCardModule } from '../card/powerbank-card.module';



@NgModule({
  declarations: [
    PowerbankListComponent
  ],
  imports: [
    CommonModule, PowerbankListRoutingModule, MatToolbarModule, PowerbankCardModule, ContainerModule]
})
export class PowerbankListModule { }
