import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotacoesTemplate',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  variavelString:String = "{{ nome_da_variavel_no_ts }}"
  constructor() { }

  ngOnInit(): void {
  }

}
