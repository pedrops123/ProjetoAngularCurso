import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesServices',
  template: `<TemplateAnotacoes [InfoSection]="DadosContent" ></TemplateAnotacoes>`
})
export class ServicesComponent implements OnInit {

  DadosContent:AnotacoesModel;

  constructor() {
    this.DadosContent = {
      idSection:'#services',
      TitleSection:'Services',
      DescriptionSection:`
      Para gerar um services via cli deve-se usar o comando ng g s nome_do_service ou ng g service nome_do_service
      Esta é a classe onde ficará toda logica do componente
      <br/><br/>
      DataAnnotation Injectable => injeção de dependencia 
      <br/><br/>
      Ao criar a classe de services , ir no componente que deseja , incluir como parametro uma variavel do tipo do service e incluir no modulo atual 
      dentro de providers o service`
    }
   }

  ngOnInit(): void {
  }

}
