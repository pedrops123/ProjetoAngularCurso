import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { InicialAngularComponent } from './inicial-angular/inicial-angular.component';
import { InfoUtilComponent } from './info-util/info-util.component';
import { ModulosComponent } from './modulos/modulos.component';
import { TemplatesComponent } from './templates/templates.component';
import { BidingInterpolacaoComponent } from './biding-interpolacao/biding-interpolacao.component';
import { ServicesComponent } from './services/services.component';
import { ClassBidingComponent } from './class-biding/class-biding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';


@NgModule({
  declarations: [
    InicialAngularComponent,
    InfoUtilComponent,
    ModulosComponent,
    ModulosComponent,
    TemplatesComponent,
    BidingInterpolacaoComponent,
    ServicesComponent,
    ClassBidingComponent,
    EventBidingComponent,
    DataBidingComponent,
    InputPropertiesComponent,

  ],
  exports:[
    InicialAngularComponent,
    InfoUtilComponent,
    ModulosComponent,
    TemplatesComponent,
    BidingInterpolacaoComponent,
    ServicesComponent,
    ClassBidingComponent,
    EventBidingComponent,
    DataBidingComponent,
    InputPropertiesComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class AnotacoesModule { }
