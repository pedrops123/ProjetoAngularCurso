import { Component, OnInit } from '@angular/core';
import { AnotacoesModel } from 'src/app/models/AnotacoesModel';

@Component({
  selector: 'AnnotationViewChild',
  template: `<TemplateAnotacoes [InfoSection]="DadosTela" ></TemplateAnotacoes>`
})
export class ViewChildComponent implements OnInit {

  DadosTela:AnotacoesModel

  constructor() {
    this.DadosTela = {
        idSection : "#VC",
        TitleSection : "View Child",
        DescriptionSection: `
          View Child é uma dataAnnotation que se inclui no .ts do componente.<br/>
          Esta dataAnnotation tem a função de informar o "backend" as informações do componente em especifico.

          Para utilizarmos devemos incluir uma variavel local no elemento em questão como exemplo abaixo: <br/>

          <b><|input type='text' #testeVariavel /|></b>
           <br/><br/>


          ...


          Após a inclusão da variavel no componente em questão , podemos acessar o TS do nosso componente e <br/>
          e incluir uma variavel do tipo HTMLElement. Esta variavel terá a dataAnnotation @ViewChild como segue exemplo abaixo : <br/>

          <b>@ViewChild('testeVariavel') elementoInput:HTMLElement;</b> <br/>

          Note que dentro do DataAnnotation <b>@ViewChild</b> colocamos o nome da nossa variavel local do elemento em questão.

        
        `
    }
   }
  ngOnInit(): void {

  }

}
