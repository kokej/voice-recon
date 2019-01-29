import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadCrumbsComponent } from './breadCrumbs.component';

const routes: Routes = [
  {
    path: '',
    component: BreadCrumbsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadCrumbsRoutingModule { }
