import { Component, OnInit } from '@angular/core';


class modeloButtons
{
  color:string;
  description:string;
  action:string;
}




@Component({
  selector: 'ngcaseExample',
  templateUrl: './ng-case.component.html',
  styleUrls: ['./ng-case.component.css']
})
export class NgCaseComponent  {

  listaButtons:modeloButtons[]; 

  buttonClicado = "acao1";

  constructor() { 

    this.listaButtons = 
    [
      {
        description:'button 1',
        color:'warn',
        action:'acao1'
      },
      {
        description:'button 2',
        color:'primary',
        action:'acao2'
      },
      {
        description:'button 3',
        color:'accent',
        action:'acao3'
      },
      {
        description:'button default',
        color:'accent',
        action:'acao_default'
      }
    ];
   }



   

}
