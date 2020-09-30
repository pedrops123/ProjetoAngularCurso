
import { Injectable } from '@angular/core';
import { ModeloInputProperties } from '../models/ModeloInputProperties';

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
        }
    ];

    return this.dadosProperties;
   }

}
