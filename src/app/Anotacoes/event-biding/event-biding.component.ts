import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'Annotation-event-biding',
  template: '<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>'
})
export class EventBidingComponent implements OnInit {

  example1:String;
  example2:String;
  dadosTela:AnotacoesModel;

  constructor() { 

    this.dadosTela = {
      idSection:'#EB',
      TitleSection:'Event Binding ( Handler )',
      DescriptionSection:`
        Para eventos no angular utilizamos ( ).
        Dentro das aspas do Evento podemos chamar um metodo no nosso component.ts , por exemplo :<br/><br/>

        <|button (click)="nome_de_algum_metodo"> me clique <|/button|> 

        <br/><br/>

        Podemos tambem declarar uma variavel local para o componente em especifico e passar ele como parametro , como exemplo abaixo:
        <br/><br/>

        <|input type="text" #valorCampo   (keyup)="nome_do_metodo(valorCampo.value)" |/|>
              `
    }


    this.example1 = `
    
     
    
    `;

    this.example2 = ``;

  }

  ngOnInit(): void {
  }

}
