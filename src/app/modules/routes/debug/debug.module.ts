import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugComponent } from './debug/debug.component';
import { VCModule } from '../../shared/VC/VC.module';

@NgModule({
  declarations: [DebugComponent],
  imports: [
    CommonModule,
    DebugRoutingModule,
    VCModule
  ]
})
export class DebugModule { }
