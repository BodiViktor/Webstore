import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen.component';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    data: { title: "Main page - TITLE" }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreenRoutingModule { }