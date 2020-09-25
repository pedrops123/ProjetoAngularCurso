
import {  NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalService } from './menu-principal.service';
import { SectionNomeComponent } from '../section-nome/section-nome.component';
import { SectionNomeModule } from '../section-nome/section-nome.module';



@NgModule({
  declarations: [
    
 
  ],
  imports: [
    CommonModule,
    SectionNomeModule
  
  ],
  providers:[
    MenuPrincipalService
  ]
})


export class MenuPrincipalModule {

}
