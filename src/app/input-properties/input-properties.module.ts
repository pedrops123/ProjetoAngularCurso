import { DumbComponentComponent } from './dumb-component/dumb-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertiesComponent } from './input-properties.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    DumbComponentComponent,
    InputPropertiesComponent,
  ],
  exports:[
    InputPropertiesComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
    
  ]
})
export class InputPropertiesModule { }
