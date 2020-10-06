import { Component, Input, OnInit, Output } from '@angular/core';
import { AnotacoesModel } from '../models/AnotacoesModel';

@Component({
  selector: 'TemplateAnotacoes',
  templateUrl: './template-anotacoes.component.html',
  styleUrls: ['./template-anotacoes.component.css']
})
export class TemplateAnotacoesComponent  {


  @Input() InfoSection :AnotacoesModel;

  /*
  @Input() idSection: String;
  @Input() TitleSection: String;
  @Input() DescriptionSection: String;
*/
  constructor() { }

  ngOnInit(): void {
  }

  getPositionScroll(id){
    console.log(id);
    }

}
