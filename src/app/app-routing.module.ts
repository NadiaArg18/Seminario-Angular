import { BodycreamCreamsComponent } from './bodycream-creams/bodycream-creams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodycreamAboutComponent } from './bodycream-about/bodycream-about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'creams',
    pathMatch: 'full'
  },
  {
    path: 'creams',
    component: BodycreamCreamsComponent
  },
  {
    path: 'about',
    component: BodycreamAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
