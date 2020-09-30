import { ModeloDataBiding } from './../models/ModeloDataBiding';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dt-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  textoDataBiding:String="Algum texto Qualquer";
  urlImagem:String = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScTXqwACHGmslYduvld1ylL3Pe8SUd2nd1Mw&usqp=CAU";

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
