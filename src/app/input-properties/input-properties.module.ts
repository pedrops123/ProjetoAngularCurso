import { DumbComponentComponent } from './dumb-component/dumb-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertiesComponent } from './input-properties.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { InputPropertiesService } from './input-properties.service';

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
    MatDividerModule,
    MatGridListModule
    
  ],
  providers:[
    InputPropertiesService
  ]
})
export class InputPropertiesModule { }
