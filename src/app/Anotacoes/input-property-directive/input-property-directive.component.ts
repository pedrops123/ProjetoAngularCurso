import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anotacoes_input-property-directive',
  template: '<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>'
})
export class InputPropertyDirectiveComponent {

  dadosTela:AnotacoesModel;

  constructor() {
    this.dadosTela = 
    {
        idSection:'#inputPropertyCustom',
        TitleSection:'Input Property com Diretivas Customizadas',
        DescriptionSection:`
          aqui vai comentario Diretivas customizadas.
        `
    }
   }

}
