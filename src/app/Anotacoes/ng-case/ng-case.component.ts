import { Component, OnInit } from '@angular/core';
import { AnotacoesModel } from 'src/app/models/AnotacoesModel';

@Component({
  selector: 'SwitchCaseAnotacoes',
  template:`<TemplateAnotacoes [InfoSection]="contentTela" ></TemplateAnotacoes>`
})
export class NgCaseComponent  {

  contentTela:AnotacoesModel;

  constructor() {
    this.contentTela = 
    {
      idSection:'#Case',
      TitleSection:'ngSwitch, ngSwitchCase e ngSwitchDefault',
      DescriptionSection:`
        Aqui vai abobrinha
      `
    }

   }

  

}
