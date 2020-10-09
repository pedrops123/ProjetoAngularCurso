import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'EstruturaInicialProjeto',
 template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class EstruturaInicialComponent  {

  dadosTela:AnotacoesModel;

  constructor() { 

    this.dadosTela =
    {
      idSection:'#structure_inicial',
      TitleSection:'Estrutura inicial do projeto',
      DescriptionSection:`
        <img src='../../assets/images/inicio_estrutura.png' alt='imagem de representação'  width="880"/>
      `
    }

  }

}
