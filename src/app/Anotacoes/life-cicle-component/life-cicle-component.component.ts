import { AnotacoesModel } from './../../models/AnotacoesModel';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'Annotation-life-cicle',
  template: `<TemplateAnotacoes [InfoSection]="dadosTela" ></TemplateAnotacoes>`
})
export class LifeCicleComponentComponent {

  dadosTela:AnotacoesModel;

  constructor() { 

    this.dadosTela = 
    {
        idSection:'#CV',
        TitleSection:'Ciclo de Vida',
        DescriptionSection:`
        <ul> 
          <li><b>NgOnChanges</b> &rarr; Quando o component é inicializado e quando o valor property-biding é atualizado .</li>
          <li><b>ngOnInit</b>  &rarr; Quando o component é inicializado . </li>
          <li><b>ngDoCheck</b>  &rarr; A cada ciclo de verificação de mudanças .</li>
          <li><b>ngAfterContentInit</b>  &rarr; Depois de inserir conteúdo externo na view .</li>
          <li><b>ngAfterContentChecked</b>  &rarr; A cada verificação de conteudo inserido. </li>
          <li><b>ngAfterViewChecked</b>  &rarr; a cada verificação de conteudo / Conteudo filho. </li>
          <li><b>ngOnDestroy</b>  &rarr; antes da diretiva/Component ser destruido. </li>
        </ul>        
        `
    }

  }
}
