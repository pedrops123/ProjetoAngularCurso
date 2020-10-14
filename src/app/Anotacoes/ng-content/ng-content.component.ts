import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesNgContent',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela"></TemplateAnotacoes>`
})
export class NgContentComponent  {

  dadosTela:AnotacoesModel;

  constructor() {

    this.dadosTela = {
      idSection:'#ngContent',
      TitleSection:'Ng Content',
      DescriptionSection:`Aqui vai conteudo Ng Content`
    }
   }

}
