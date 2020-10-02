import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { InputPropertiesService } from './input-properties/input-properties.service';
import { BidingInterpolacaoComponent } from './biding-interpolacao/biding-interpolacao.component';
import { ClassBidingComponent } from './class-biding/class-biding.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { EventOutputPropertiesComponent } from './event-output-properties/event-output-properties.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { InterpolacoesComponent } from './interpolacoes/interpolacoes.component';
import { DumbComponentComponent } from './input-properties/dumb-component/dumb-component.component';
import { LifeCicleComponentComponent } from './life-cicle-component/life-cicle-component.component';
import { ComponentFileCicleComponent } from './life-cicle-component/component-file-cicle/component-file-cicle.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations:
   [
    BidingInterpolacaoComponent,
    ClassBidingComponent,
    DataBidingComponent,
    EventBidingComponent,
    EventOutputPropertiesComponent,
    InputPropertiesComponent,
    InterpolacoesComponent,
    DumbComponentComponent,
    LifeCicleComponentComponent,
    ComponentFileCicleComponent,
    ViewChildComponent
  ],
  exports:
  [
    BidingInterpolacaoComponent,
    ClassBidingComponent,
    DataBidingComponent,
    EventBidingComponent,
    EventOutputPropertiesComponent,
    InputPropertiesComponent,
    InterpolacoesComponent,
    LifeCicleComponentComponent,
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
    
  ],
  providers:[
    InputPropertiesService
  ]
})
export class ExemplosModule { }