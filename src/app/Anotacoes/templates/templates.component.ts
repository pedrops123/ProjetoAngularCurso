import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'AnotacoesTemplate',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
  
})
export class TemplatesComponent implements OnInit {

  dadosTela:AnotacoesModel;

  constructor() {
    this.dadosTela = {
      idSection:'#int',
      TitleSection:'Templates angular  - Interpolações',
      DescriptionSection:`
      Ao incluir variaveis ou implementar classes onde contenham propriedades , se essas propriedades forem preenchidas com alguma informação 
      estas mesmas informações poderam ser acessadas direto do template via interpolação
      <br/>
      Estas variaveis podem devem ser colocados dentro do .ts do componente criado.
      <br/>

      <b>Para interpolação deve-se utilizar {{ nome_da_variavel_no_ts }} </b><br/>

      Dentro de component.ts Existe o DataAnnotation <b> @Component </b> onde possui os atributos principais :<br/>

      selector -> o seletor que sera utilizado para chamar o componente em outra tela  <br/>
      templateUrl -> o template correspondente ao componente <br/>
      StyleUrls -> o CSS correspondente ao componente<br/>

      pode-se utilizar o template literal com os atributos template <br/><br/>

      `
    }

   }

  ngOnInit(): void {
  }

}
