import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialAngularComponent } from './inicial-angular.component';



@NgModule({
  declarations: [
    InicialAngularComponent
  ],
  exports:[
    InicialAngularComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicialAngularModule { }
