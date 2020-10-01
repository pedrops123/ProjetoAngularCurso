import {   NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalService } from './menu-principal.service';
import { SectionNomeComponent } from '../section-nome/section-nome.component';
import { SectionNomeModule } from '../section-nome/section-nome.module';
import { MenuPrincipalComponent } from './menu-principal.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { ExemplosModule } from '../Exemplos/exemplos.module';
import { AnotacoesModule } from '../Anotacoes/anotacoes.module';

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
    MatTreeModule,
    ExemplosModule,
    AnotacoesModule
  ],
  providers:[
    MenuPrincipalService
  ]
})


export class MenuPrincipalModule {

}
