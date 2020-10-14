import { Component, OnInit } from '@angular/core';

class ListaExemplo{
  nome:string;
  sobrenome:string;
  idade:number;
}



@Component({
  selector: 'example_ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  nomeDiretiva:String = 'ng For';
  listaForExemplo:ListaExemplo[];
  constructor() {
      this.listaForExemplo = 
      [
        {
          nome:'Cleber',
          sobrenome:'Pereira Nascimento',
          idade:20
        },
        {
          nome:'Maria ',
          sobrenome:'Josefina Cristina',
          idade:33
        },
        {
          nome:'Rafael',
          sobrenome:'Tarantino de souza',
          idade:86
        },
        {
          nome:'Lindsay',
          sobrenome:'Meirelle Augusto Soares',
          idade:46
        }
    ];
   }

  ngOnInit(): void {
  }



}
