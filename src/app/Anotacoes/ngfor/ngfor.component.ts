import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anotacoes-ngfor',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class NgforComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() { 
    this.dadosTela = 
    {
      idSection:'#ngFor',
      TitleSection:'Ng For',
      DescriptionSection:`
        Loop for em angular.
    `
    }


  }

  ngOnInit(): void {
  }

}
