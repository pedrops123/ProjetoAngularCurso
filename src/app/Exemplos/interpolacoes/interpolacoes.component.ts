import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolacao',
  templateUrl: './interpolacoes.component.html',
  styleUrls: ['./interpolacoes.component.css']
})
export class InterpolacoesComponent implements OnInit {

  descricaoTeste:String;
  constructor() {

    this.descricaoTeste = "Um comentario qualquer";
   }

  ngOnInit(): void {
  }

}
