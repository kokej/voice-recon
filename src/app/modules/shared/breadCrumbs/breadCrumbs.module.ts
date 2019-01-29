import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './breadCrumbs.component';
import { BreadCrumbsRoutingModule } from './breadCrumbs-routing';

@NgModule({
  imports: [
    CommonModule,
    BreadCrumbsRoutingModule
  ],
  declarations: [BreadCrumbsComponent],
  entryComponents: [BreadCrumbsComponent],
  exports: [BreadCrumbsComponent]
})
export class BreadCrumbsModule { }
