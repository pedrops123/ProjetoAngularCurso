import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'outputAnotation',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class OutputPropertiesComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {

    this.dadosTela =
    {
      idSection:'#OP',
      TitleSection:'Output Properties',
      DescriptionSection:`
              <br/><br/>
        Para podermos Emitir um valor de um componente filho para um pai podemos usar a classe <b>EventEmmiter</b>
        Para emitir o valor devemos utilizar a instancia do objeto EventEmmiter passando um valor que queremos.
        Podemos passar desde uma simples string a um objeto complexo. 
        <br/><br/>
        <b>Sintaxe:</b>
        <br/><br/>

         Emmiter = new EventEmmiter(); <br/><br/>

        ... 
        
        <br/><br/>

        this.Emmiter.emit("alguma_coisa");<br/><br/>

        para deixar o atributo Emmiter visivel , devemos incluir a tag @Output() e no componente que fomos chamar este output
        devemos incluir o event bind na tag filho. Exemplo: <br/>

        <|tag_filho (propriedadeEmmiter)='alguma_funcao_component_pai($event)'><|/tag_filho|>

        <br/><br/>
      `
    }
  }

  ngOnInit(): void {
  }

}
