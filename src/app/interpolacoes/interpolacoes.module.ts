import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacoesComponent } from './interpolacoes.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    InterpolacoesComponent
  ],
  exports:[
    InterpolacoesComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class InterpolacoesModule { }
