import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tagTeste',
  templateUrl: './section-nome.component.html',
  styleUrls: ['./section-nome.component.css']
  
})
export class SectionNomeComponent  {

  descricaoTeste:String;
  urlImg:String;
  constructor() {

      this.descricaoTeste = "Um comentario qualquer";
      this.urlImg = "http://lorempixel.com/400/200/sports/2/";

   }

  ngOnInit(): void {
  }

}
