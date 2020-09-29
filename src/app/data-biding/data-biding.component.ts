import { ModeloDataBiding } from './../models/ModeloDataBiding';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dt-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  textoDataBiding:String="Algum texto Qualquer";

  dados:ModeloDataBiding;

  constructor() {
    
   this.dados = {
     nome : "nome_inicial",
     sobrenome : "Sobrenome_inicial"
   }

   }

  ngOnInit(): void {
  }

}
