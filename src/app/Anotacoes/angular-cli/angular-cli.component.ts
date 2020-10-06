import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AngularCLI',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class AngularCLIComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {
    this.dadosTela = {
        idSection: '#CLI' ,
        TitleSection:'Angular CLI',
        DescriptionSection:`
          descricao qualquer
        
        `
    }

   }

  ngOnInit(): void {
  }

}
