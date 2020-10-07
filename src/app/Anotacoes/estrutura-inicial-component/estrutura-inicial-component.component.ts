import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estrutura-inicial',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class EstruturaInicialComponentComponent implements OnInit {


  dadosTela:AnotacoesModel;

  constructor() {
    this.dadosTela = {
      TitleSection:'Estrutura Inicial Componentes',
      idSection:'#EI',
      DescriptionSection:` 
        Ao criarmos um componente no angular , podemos visualizar que foi criado uma pasta com o nome do componente
        e dentro da mesma , temos 4 arquivos. Vamos a explicação de cada uma: <br/>

        <ul>
          <li> <b>.css</b> </li>
          <li> <b>.html</b> </li>
          <li> <b>.css</b> </li>
          <li> <b>.spec.ts</b> </li>
          <li> <b>.ts</b> </li>
        </ul>
      `
    }


   }

  ngOnInit(): void {
  }

}
