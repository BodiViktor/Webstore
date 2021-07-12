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
      /*{ path: 'other-products', loadChildren: () => import('./../other-products/others-card.module').then(m => m.OthersCardModule) },
      { path: 'phonecases', loadChildren: () => import('./../phonecases/phonecase-card.module').then(m => m.PhonecaseCardModule) },
      { path: 'powerbanks', loadChildren: () => import('./../powerbanks/powerbank-card.module').then(m => m.PowerbankCardModule) },*/
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule { }