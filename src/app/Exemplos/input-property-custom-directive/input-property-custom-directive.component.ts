import { Component, OnInit } from '@angular/core';
import { dropValoresPadroes } from 'src/app/class/cores-padroes';
import { DropCoresValue } from 'src/app/models/DropCoresValue';

@Component({
  selector: 'example-custom-directive',
  templateUrl: './input-property-custom-directive.component.html',
  styleUrls: ['./input-property-custom-directive.component.css']
})
export class InputPropertyCustomDirectiveComponent implements OnInit {

  nomeDiretiva:string = "Diretiva Customizada";
  coresDrop:DropCoresValue[] = dropValoresPadroes;

  highlightColor:string = 'white';
  defaultColor:string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
