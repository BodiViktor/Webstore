import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PhonecaseAddComponent } from './pages/admin/phonecase-add/phonecase-add.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  //{ path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  //{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  //{ path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  //{ path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },
  //{ path: 'favorites', loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule) },
  //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
  { path: '**', redirectTo: 'store', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
