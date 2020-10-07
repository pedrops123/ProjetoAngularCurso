import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AngularCLI',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class AngularCLIComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() 
  {
    this.dadosTela = {
        idSection: '#CCLI' ,
        TitleSection:'Comandos principais Angular CLI',
        DescriptionSection:`
         
          <div>
            <h2> Comandos Iniciais </h2>
            <ul>
              <li> <b> ng init &rarr; </b>    Inicia um novo projeto  </li>
              <li> <b> ng serve  &rarr;</b>   Sobe o projeto no servidor local </li>
              <li> <b> ng build   &rarr;</b>  Compila o projeto e verifica erros  </li>
            </ul>
          </div>
          <div>
            <h2> Comandos de criação </h2>
            <ul>
              <li> <b> ng g c nome_do_componente &rarr; </b>  Cria um componente </li>
              <li> <b> ng g m nome_do_modulo &rarr; </b> Cria um modulo  </li>
              <li> <b> ng g s nome_do_service &rarr; </b> Cria um serviço  </li>
              <li> <b> ng g directive nome_da_diretiva &rarr; </b> Cria uma diretiva </li>
              <li> <b> ng g pipe nome_do_pipe &rarr; </b> Cria um pipe </li>
              <li> <b> ng g class nome_da_classe &rarr; </b> Cria uma Classe </li>
              <li> <b> ng g interface nome_da_interface &rarr; </b> Cria uma interface </li>
              <li> <b> ng g enum nome_do_enum &rarr; </b> Cria um Enum </li>
            </ul>
          </div>
         
        `
    }
   }

  ngOnInit(): void {
  }

}
