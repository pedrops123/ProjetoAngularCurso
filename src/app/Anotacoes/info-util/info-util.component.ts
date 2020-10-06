import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesInfo',
  template: `<TemplateAnotacoes [InfoSection]="dadosContent" ></TemplateAnotacoes>`
})
export class InfoUtilComponent implements OnInit {

  dadosContent :AnotacoesModel;

  constructor() {
    this.dadosContent = {
        idSection :"#IU",
        TitleSection:"INFORMAÇÕES ÚTEIS",
        DescriptionSection:`
        Apos criar o projeto segue alguns codigos uteis :<br/><br/>

        <b> codigo para criar novos componentes -> ng g c nome-arquivo ou  ng g component nome-arquivo </b>
        <br/>
        <br/>
        
        apos rodar o codigo ele criara uma pasta com 4 arquivos um css de estilo , um html de template externo,
        um de spec.ts para testes unitarios , e um .ts que é como se fosse o "backend" do component
        <br/>
        <br/>
        
        Compilar arquivos typeScript -> tsc nome_do_arquivo.ts
        <br/>
        <br/>`
    }
   }

  ngOnInit(): void {
  }

}
