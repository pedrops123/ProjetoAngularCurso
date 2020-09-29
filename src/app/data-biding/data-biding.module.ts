import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBidingComponent } from './data-biding.component';
import { FormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DataBidingComponent
  ],
  exports:[
    DataBidingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class DataBidingModule { }
