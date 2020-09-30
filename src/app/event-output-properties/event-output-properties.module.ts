import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventOutputPropertiesComponent } from './event-output-properties.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    EventOutputPropertiesComponent
  
  ],
  exports:[
    EventOutputPropertiesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class EventOutputPropertiesModule { }
