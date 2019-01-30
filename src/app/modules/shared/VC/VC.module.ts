import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VCComponent } from './VC.component';
import { VCService } from './VC.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [VCComponent],
  entryComponents: [VCComponent],
  providers: [VCService],
  exports: [VCComponent]
})
export class VCModule { }
