import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-properties-annotation',
  template: '<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>'
  
})
export class InputPropertiesComponent implements OnInit {


  dadosTela:AnotacoesModel;

  constructor() {

      this.dadosTela = {
        idSection: '#IP',
        TitleSection: 'Input Properties',
        DescriptionSection: `
        <br/>
        <br/>
        Para deixar um componente aceitar uma propriedade , deverá colocar na propriedade o "@Input" dentro do component.ts
        <br/><br/>
        <b>sintaxe:</b>
        <br/>
        @Input() nome_da_variavel:String; ou @Input('outro_nome') nome_da_variavel:String; 
        <br/><br/>

        ` 
      }

   }

  ngOnInit(): void {
  }

}
