import { Component, OnInit } from '@angular/core';
import { AnotacoesModel } from 'src/app/models/AnotacoesModel';

@Component({
  selector: 'Inicial-angular',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class InicialAngularComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() { 
    this.dadosTela = {
      TitleSection:"Iniciando com Angular",
      idSection:"#inicial",
      DescriptionSection:`
      Itens necessários para começar a desenvolver com o Angular :
      
      <ul>
          <li>Instalar o NPM</li>
          <a href='https://nodejs.org/en/'>https://nodejs.org/en/</a>
          <li>instalar o typescript -> npm install -g typescript</li>
          <li>Instalar o cli do angular -> npm install -g @angular/cli </li>
      </ul>`
    }
  }

  ngOnInit(): void {
  }

}
