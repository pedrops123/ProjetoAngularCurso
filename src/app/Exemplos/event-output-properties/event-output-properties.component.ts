import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'output-properties',
  templateUrl: './event-output-properties.component.html',
  styleUrls: ['./event-output-properties.component.css']
})
export class EventOutputPropertiesComponent implements OnInit {

  valorContador:number;

  @Output() Emmiter = new EventEmitter();
  
  constructor() { 
    this.valorContador = 0;
  }

  ngOnInit(): void {
  }


  acrescenta(){
    this.valorContador++;
    this.Emmiter.emit( { valorIncrementado:this.valorContador } );
  }


  diminui(){
    this.valorContador--;
    this.Emmiter.emit( { valorDecrementado:this.valorContador } );
  }

}
