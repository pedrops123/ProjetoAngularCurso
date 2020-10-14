import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesNGStyle',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class NgStyleComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {
      this.dadosTela = {

        idSection:'#ngStyle',
        TitleSection:'Ng Style',
        DescriptionSection:`
        Aqui vai um comentario ng Style.
        `
      }


   }

  ngOnInit(): void {
  }

}
