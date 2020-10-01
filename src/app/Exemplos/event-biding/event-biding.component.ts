import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {


  tamanhoMaximo:number = 10;

  validaText:boolean;


  constructor() { }

  ngOnInit(): void {
  }


  msgBotao(){
    alert("Clicado com sucesso !");
  }


  validaMsg(evento:KeyboardEvent){
    console.log(evento);
    console.log((<HTMLInputElement>evento.target).value);
    var descricaoDigitado = (<HTMLInputElement>evento.target).value;
    descricaoDigitado.length >= this.tamanhoMaximo ?  this.validaText = true : this.validaText = false; 
  }

}
