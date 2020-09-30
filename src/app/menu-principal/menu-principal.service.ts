import { LinkMenu } from './../models/LinkMenu';
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
      dadosArvore:[
        {
          node:"Anotações",
          childs:[
            {
              Description:"Iniciando no angular",
              href:"#inicial"
            }
          ]
        },
        {
          node:"Exemplos",
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
