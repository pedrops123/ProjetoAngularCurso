import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';


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
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { LifeCicleComponentComponent } from './life-cicle-component/life-cicle-component.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TemplateAnotacoesComponent } from '../template-anotacoes/template-anotacoes.component';
import { FundoLateralComponent } from '../template-anotacoes/fundo-lateral/fundo-lateral.component';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { EstruturaInicialComponentComponent } from './estrutura-inicial-component/estrutura-inicial-component.component';


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
    OutputPropertiesComponent,
    LifeCicleComponentComponent,
    ViewChildComponent,
    TemplateAnotacoesComponent,
    FundoLateralComponent,
    AngularCLIComponent,
    EstruturaInicialComponentComponent
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
    InputPropertiesComponent,
    OutputPropertiesComponent,
    LifeCicleComponentComponent,
    ViewChildComponent,
    AngularCLIComponent,
    EstruturaInicialComponentComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class AnotacoesModule { }
