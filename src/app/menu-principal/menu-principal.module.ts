import { EventBidingModule } from './../event-biding/event-biding.module';

import {   NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalService } from './menu-principal.service';
import { SectionNomeComponent } from '../section-nome/section-nome.component';
import { SectionNomeModule } from '../section-nome/section-nome.module';
import { MenuPrincipalComponent } from './menu-principal.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InterpolacoesModule } from '../interpolacoes/interpolacoes.module';
import { BidingInterpolacaoModule } from '../biding-interpolacao/biding-interpolacao.module';
import { ClassBidingModule } from '../class-biding/class-biding.module';
import { DataBidingComponent } from '../data-biding/data-biding.component';
import { DataBidingModule } from '../data-biding/data-biding.module';
import { InputPropertiesModule } from '../input-properties/input-properties.module';

@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  exports:[
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    SectionNomeModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    InterpolacoesModule,
    BidingInterpolacaoModule,
    ClassBidingModule,
    EventBidingModule,
    DataBidingModule,
    InputPropertiesModule


  ],
  providers:[
    MenuPrincipalService
  ]
})


export class MenuPrincipalModule {

}
