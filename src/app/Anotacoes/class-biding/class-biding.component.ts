import { AnotacoesModel } from './../../models/AnotacoesModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'AnotationClassBiding',
  template:`<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})

export class ClassBidingComponent implements OnInit {


  dadosTela:AnotacoesModel;


  example1:String;
  example2:String;
  example3:String;


  constructor() { 

    this.dadosTela =
    {
      idSection:'#BC',
      TitleSection:'Class e Style Biding',
      DescriptionSection:`
              
        Para criar uma variavel local deverá colocar na tag como #nome_variavel , por exemplo , para criar uma variavel em um combobox , deve-se colocar como
        exemplo abaixo: <br/> <br/>

        <b style="color:yellow;">Atenção ignorar os pipes ( | ) no exemplo abaixo:</b> 
        
        <| select #variavel |>
            <|option value=1>opçao 1<|/option|>
            <|option value=2>opçao 1<|/option|>
            <|option value=3>opçao 1<|/option|>
        <|/select|>
      
        <br/> <br/>

        Apos isso deve-se colocar um event binding , neste caso coloquei um change no select 

              <|select #variavel (change="0")|>
                    <|option value=1>opçao 1<|/option|>
                    <|option value=2>opçao 1<|/option|>
                    <|option value=3>opçao 1<|/option|>
              <|/select|>

        Apos isto podemos criar nosso elemento via binding ou interpolação:


        <|select #variavel (change="0")|>
              <|option value=1>opçao 1<|/option|>
              <|option value=2>opçao 1<|/option|>
              <|option value=3>opçao 1<|/option|>
        </select>

        <|h1|>{{ variavel.value }}<|/h1|>

                      ou 

      <|button [class]="variavel.value"><|/button|>
              
      `
    }
  }

  ngOnInit(): void {
  }

}
