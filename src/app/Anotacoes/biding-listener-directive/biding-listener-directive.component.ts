import { AnotacoesModel } from 'src/app/models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Anotation-biding-listener-directive',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class BidingListenerDirectiveComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {
      this.dadosTela = 
      {
        idSection:'#BLdirective',
        TitleSection:'Biding e Listeners com Diretivas',
        DescriptionSection:`Aqui vai descrição do biding e listeners com diretivas`
      }

   }

  ngOnInit(): void {
  }

}
