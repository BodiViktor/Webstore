import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: '',
    component: StoreComponent,
    children: [
      { path: 'splash', loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule) },
      { path: 'phonecases', loadChildren: () => import('./../phonecases/list/phonecase-list.module').then(m => m.PhonecaseListModule) },
      { path: 'powerbanks', loadChildren: () => import('./../powerbanks/list/powerbank-list.module').then(m => m.PowerbankListModule) },

      //{ path: 'other-products', loadChildren: () => import('./../other-products/others-card.module').then(m => m.OthersCardModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }