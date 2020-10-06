import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Anotacoes-biding-interpolacao',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class BidingInterpolacaoComponent implements OnInit {


  dadosTela:AnotacoesModel;

  tagInterpolacao:String = "";

  constructor() {

    this.dadosTela = {
      idSection :'#BI',
      TitleSection:'Interpolações e binding',
      DescriptionSection:`Para fazer interpolação basta colocar em volta de sua variavel no html o {{ }} , para fazer o bind , 
      basta colocar o [ ] em volta da propriedade que queira`
    }

   }

  ngOnInit(): void {
  }

}
