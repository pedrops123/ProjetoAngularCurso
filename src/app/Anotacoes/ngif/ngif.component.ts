import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngifAnotacoes',
  template:`<TemplateAnotacoes [InfoSection]="contentTela"></TemplateAnotacoes>`
})
export class NgifComponent  {

  contentTela:AnotacoesModel;

  constructor() { 
    this.contentTela = {
      TitleSection:'Ngif',
      idSection:'#if',
      DescriptionSection:`
      Condicional if para validar itens na pagina
      
      `
    }


  }


}
