import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionNomeComponent } from './section-nome.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataBidingComponent } from '../Exemplos/data-biding/data-biding.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SectionNomeComponent
  ],
  exports:[
    SectionNomeComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
 
})
export class SectionNomeModule { }
