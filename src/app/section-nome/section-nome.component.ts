import { Component, OnInit } from '@angular/core';
import { MenuPrincipalService } from '../menu-principal/menu-principal.service';

@Component({
  selector: 'tagTeste',
  templateUrl: './section-nome.component.html',
  styleUrls: ['./section-nome.component.css']
  
})
export class SectionNomeComponent  {

urlIcon:String;

  constructor(dadosTela:MenuPrincipalService) {
      var dados  = dadosTela.getInformacaoUser();
      this.urlIcon = dados.UrlFoto;
   }

  ngOnInit(): void {
  }




}
