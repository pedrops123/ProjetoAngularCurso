import { Component, OnInit } from '@angular/core';

class ComponentStyle{
  Color:string;
  width:number;
  height:number;
  font_color:string;
  font_size:number;
}

class DropCoresValue {
  description:string;
  value:string; 
}



@Component({
  selector: 'ExampleNgStyle',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})

export class NgStyleComponent implements OnInit {

  diretiva:string = 'Ng Style';
  
  detailsComponent:ComponentStyle;

  DadosDropListCores:DropCoresValue[];

  descricaoTeste:String = "Description";
  
  constructor() {
      this.detailsComponent = {
        Color:'black',
        height:300,
        width:300,
        font_color:'white',
        font_size:10
      }

      this.DadosDropListCores = [
        {
          description:'Branco',
          value:'white'
        },
        {
          description:'Preto',
          value:'black'
        },
        {
          description:'Rosa',
          value:'pink'
        },
        {
          description:'Amarelo',
          value:'yellow'
        },
        {
          description:'Verde',
          value:'green'
        }
      ]
   }

  ngOnInit(): void {
  }

}
