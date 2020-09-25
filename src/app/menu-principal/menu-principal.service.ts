import { DadosMenu } from './../models/DadosMenu';
import { DadosUser } from './../models/DadosUser';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuPrincipalService  {

  private data:DadosMenu;

  constructor() { }

  getInformacaoUser(){
    this.data = 
    {
      NomeUsuario : "Pedro Furlan",
      Cargo : "Desenvolvedor",
      UrlFoto : "",
      ListaItensMenu : [
        'item 1',
        'item 2',
        'Item 3'
      ]
    }
    return this.data;
  }

}
