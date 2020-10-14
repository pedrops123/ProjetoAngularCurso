import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anotacao-ngClass',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class NgClassComponent  {

  dadosTela:AnotacoesModel;

  constructor() {
    this.dadosTela = {
      idSection:'#ngClass',
      TitleSection:'Ng Class',
      DescriptionSection:`
        Descrição ng Class
      
      `
    }


   }

  

}
