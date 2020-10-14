import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/* Modulos Material Design  */
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { FundoLateralComponent } from './template-anotacoes/fundo-lateral/fundo-lateral.component';






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
