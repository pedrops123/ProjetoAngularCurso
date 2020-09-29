import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBidingComponent } from './event-biding.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EventBidingComponent
  ],
  exports:[
    EventBidingComponent
  ],

  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EventBidingModule { }
