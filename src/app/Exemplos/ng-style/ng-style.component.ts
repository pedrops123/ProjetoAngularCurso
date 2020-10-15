import { Component, OnInit } from '@angular/core';
import { DropCoresValue } from 'src/app/models/DropCoresValue';
import { dropValoresPadroes } from '../../class/cores-padroes';

class ComponentStyle{
  Color:string;
  width:number;
  height:number;
  font_color:string;
  font_size:number;
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

      this.DadosDropListCores = dropValoresPadroes;
   }

  ngOnInit(): void {
  }

}
