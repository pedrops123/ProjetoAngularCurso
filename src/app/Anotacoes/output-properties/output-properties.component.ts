import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'outputAnotation',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  Exemplo1 :String = "<tag_filho (propriedadeEmmiter)='alguma_funcao_component_pai($event)'></tag_filho>";
  constructor() { }

  ngOnInit(): void {
  }

}
