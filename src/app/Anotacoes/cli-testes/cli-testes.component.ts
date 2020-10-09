import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'CTestes',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class CliTestesComponent {

  dadosTela:AnotacoesModel;

  constructor() {

    this.dadosTela = 
    {
      idSection: '#Ctestes' ,
      TitleSection: 'Comandos de Testes CLI' , 
      DescriptionSection: `
        <h1> Comandos para testes Angular CLI </h1>

        <li>
          <ul> <b> ng lint &rarr; </b> Verifica toda aplicação de acordo com as boas praticas do Style guide do angular.  </ul>
          <ul> <b> ng test &rarr; </b> Verifica cada arquivo spec.ts e faz testes unitarios em cada um.  </ul>
          <ul> <b> ng e2e &rarr; </b> Executa um teste de integração na aplicação.  </ul>
        </li>
      `
    }


   }
}
