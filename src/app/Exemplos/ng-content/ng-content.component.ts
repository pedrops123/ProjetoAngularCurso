import { Component, OnInit } from '@angular/core';


class dataDivComponent {
  NomeTitle:string;
  Descricao:string
}

@Component({
  selector: 'NgContentExample',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  nomeDiretiva:string = 'Ng Content';
  dataParams:dataDivComponent[];


  constructor() { 
    this.dataParams = [
      {
        NomeTitle:'Titulo 1',
        Descricao:'Div descricao 1'
      },
      {
        NomeTitle:'Titulo 2',
        Descricao:'Div descricao 2'
      },
      {
        NomeTitle:'Titulo 3',
        Descricao:'Div descricao 3'
      },
      {
        NomeTitle:'Titulo 4',
        Descricao:'Div descricao 4'
      }
    ];
  }

  ngOnInit(): void {
  }

}
