import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'output-properties',
  templateUrl: './event-output-properties.component.html',
  styleUrls: ['./event-output-properties.component.css']
})
export class EventOutputPropertiesComponent implements OnInit {

  valorContador:number;

  constructor() { 
    this.valorContador = 0;
  }

  ngOnInit(): void {
  }


  acrescenta(){
    this.valorContador++;
  }


  diminui(){
    this.valorContador--;
  }

}
