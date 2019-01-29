import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { BreadCrumbsModule } from '../../shared/breadCrumbs/breadCrumbs.module';
import { NavRoutingModule } from './nav-routing.module';

@NgModule({
  imports: [CommonModule, NavRoutingModule, BreadCrumbsModule],
  declarations: [NavComponent],
  entryComponents: [NavComponent],
  exports: [NavComponent],
  bootstrap: [NavComponent]
})
export class NavModule {}
