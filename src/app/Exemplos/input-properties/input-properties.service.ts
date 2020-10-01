
import { Injectable } from '@angular/core';
import { ModeloInputProperties } from '../../models/ModeloInputProperties';

@Injectable()
export class InputPropertiesService {

  dadosProperties:ModeloInputProperties[];


  constructor() {     }

   montaDadosInputProperties(){
     this.dadosProperties = 
     [
        {
          title:'Div 1',
          color:'red',
          description:'Primeira DIV'
        },
        {
          title:'Div 2',
          color:'blue',
          description:'Segunda Div'
        },
        {
          title:'Div 3',
          color:'green',
          description:'Terceira Div'
        },
        {
          title:'Div 4',
          color:'#C63C1E',
          description:'Quarta Div'
        },
        {
          title:'Div 5',
          color:'#079A9B',
          description:'Quinta Div'
        },
        ,
        {
          title:'Div 6',
          color:'#079A9B',
          description:'Quinta Div'
        }
    ];

    return this.dadosProperties;
   }

}
