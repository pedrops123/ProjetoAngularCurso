import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotationDiretivaAtr',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela"></TemplateAnotacoes>`
})
export class DiretivaAtributoComponent {

  dadosTela:AnotacoesModel;
    constructor() { 
      this.dadosTela = {
        idSection:'#Atributes',
        TitleSection:'Diretiva de Atributos',
        DescriptionSection:`  
          Aqui vai comentario diretiva atributos.
        `
      }
  }
}
