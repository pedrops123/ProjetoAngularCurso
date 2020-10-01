import { DadosMenu } from './../models/DadosMenu';
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
      dadosArvore:[
        {
          node:"Começando com Angular",
          childs:[
            {
              Description:'Iniciando com Angular',
              href:'#inicial'
            },
            {
              Description:'Informações Úteis',
              href:'#IU'
            },
            {
              Description:'Criando modulos no Angular',
              href:'#modulos'
            },
            {
              Description:'Services',
              href:'#services'
            }
          ]
        },
        {
          node:"Explicações / Exemplos",
          childs:[
            {
              Description:'Interpolações',
              href:'#int'
            },
            {
              Description:'Biding e Interpolações',
              href:'#BI'
            },
            {
              Description:'Biding de classes',
              href:'#BC'
            },
            {
              Description:'Event Biding',
              href:'#EB'
            },
            {
              Description:'Two Way Data Biding',
              href:'#TWDB'
            },
            {
              Description:'Input Properties',
              href:'#IP'
            }
          ]
        }
      ]
    }



    return this.data;
  }

}
