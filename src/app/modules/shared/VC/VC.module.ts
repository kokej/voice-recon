import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCComponent } from './VC.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VCComponent],
  entryComponents: [VCComponent],
  exports: [VCComponent]
})
export class VCModule { }
