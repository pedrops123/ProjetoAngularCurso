import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/* Modulos Material Design  */

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { SectionNomeModule } from './section-nome/section-nome.module';
import { SectionNomeComponent } from './section-nome/section-nome.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InterpolacoesComponent } from './interpolacoes/interpolacoes.component';
import { BidingInterpolacaoComponent } from './biding-interpolacao/biding-interpolacao.component';
import { ClassBidingComponent } from './class-biding/class-biding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { DumbComponentComponent } from './input-properties/dumb-component/dumb-component.component';
import { EventOutputPropertiesComponent } from './event-output-properties/event-output-properties.component';
import { InicialAngularComponent } from './Anotacoes/inicial-angular/inicial-angular.component';

@NgModule({
  declarations: 
  [
    AppComponent
   
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    MenuPrincipalModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
