import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Annotation-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  example1:String;
  example2:String;

  constructor() { 
    this.example1 = `
    
      <button (click)="nome_de_algum_metodo"> me clique </button> 
    
    `;

    this.example2 = `<input type="text" #valorCampo   (keyup)="nome_do_metodo(valorCampo.value)" />`;

  }

  ngOnInit(): void {
  }

}
