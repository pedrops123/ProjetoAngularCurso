import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidingInterpolacaoComponent } from './biding-interpolacao.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    BidingInterpolacaoComponent
  ],
  exports:[
    BidingInterpolacaoComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class BidingInterpolacaoModule { }
