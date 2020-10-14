import { DadosMenu } from './../models/DadosMenu';
import { Injectable } from '@angular/core';
import { environment }  from '../../environments/environment.prod';

@Injectable()
export class MenuPrincipalService  {

  private data:DadosMenu;


  constructor() { }

  getInformacaoUser(){

    this.data = 
    {
      NomeSistema : environment.nomeSistema,
      Versao : `Versão ${ environment.version }`,
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
              Description:'Comandos Principais',
              href:'#CCLI'
            },
            {
              Description:'Comandos de teste',
              href:'#Ctestes'
            },
            {
                Description:'Estrutura inicial do Projeto',
                href:'#structure_inicial'
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
        },
        {
          node:'Diretivas',
          childs:[
            {
              Description:'ng-if',
              href:'#if'
            },
            {
              Description:'ngSwitch, ngSwitchCase e ngSwitchDefault',
              href:'#Case'
            },
            {
              Description:'Ng-for',
              href:'#ngFor'
            },
            {
              Description:'Ng-Class',
              href:'#ngClass'
            },
            {
              Description:'Ng-Style',
              href:'#ngStyle'
            },
            {
              Description:'Ng-Content',
              href:'#ngContent'
            },
            {
              Description:'Diretivas de Atributos',
              href:'#Atributes'
            }
          ]
        }
      ]
    }

    return this.data;
  }

}
