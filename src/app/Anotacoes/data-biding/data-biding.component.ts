import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnnotationDtBiding',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class DataBidingComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {
    
    this.dadosTela = {
        idSection:'#TWDB',
        TitleSection:'Two way data biding',
        DescriptionSection:`
          Para utilizar o two Way data bind , deve-se utilizar como propriedade o ngmodel, 
          a sintaxe para utilização é : <br/><br/> <b> " [(ngModel)]="nome_da_propriedade " </b>  
        `
    }

   }

  ngOnInit(): void {
  }

}
