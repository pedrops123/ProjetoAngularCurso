import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesModulos',
  template:`<TemplateAnotacoes [InfoSection]="contentTela" ></TemplateAnotacoes>`
})
export class ModulosComponent implements OnInit {

  contentTela:AnotacoesModel;
  
  constructor() { 

    this.contentTela =
    {
      idSection:"#modulos",
      TitleSection :"Criando modulos no Angular",
      DescriptionSection:
      `
      especificacoes ngModule: <br/> <br/>
      
      declarations -> Todos os components , diretivas e pipes que queremos utilizar somente neste modulo <br/>
      imports -> outros modulos que desejamos utilizar  <br/>
      exports -> Exporta alguns componentes , ou diretivas para outros modulos. <br/>
      providers -> serviços disponiveis a todos os componentes do modulo  <br/> <br/>
      
      
      para criar um modulo novo deve-se incluir o comando abaixo: <br/> <br/>
      
      <b> ng g m nome_do_modulo ou ng g module nome_do_modulo </b><br/><br/>`
    }
  }

  ngOnInit(): void {
  }

}
