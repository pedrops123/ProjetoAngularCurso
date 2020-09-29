import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassBidingComponent } from './class-biding.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ClassBidingComponent
  ],
  exports:[
    ClassBidingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ClassBidingModule { }
