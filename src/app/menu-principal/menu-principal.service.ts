import { DadosMenu } from './../models/DadosMenu';
import { Injectable } from '@angular/core';


@Injectable()
export class MenuPrincipalService  {

  private data:DadosMenu;


  constructor() { }

  getInformacaoUser(){

    this.data = 
    {
      NomeUsuario : "Angular Guide",
      Cargo : "Versão 1.0.0",
      UrlFoto : "../../assets/images/angular_icon.png",
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
          node:'Angular CLI',
          childs:[
            {
              Description:'Instalação CLI',
              href:'#CLI'
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
            },
            {
              Description:'Output Properties',
              href:'#OP'
            },
            {
              Description:'Ciclo de Vida Componentes',
              href:'#CV'
            },
            {
              Description:'View Child',
              href:'#VC'
            }
          ]
        }
      ]
    }



    return this.data;
  }

}
