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
          <li>NgOnChanges -> Quando o component é inicializado e quando o valor property-biding é atualizado .</li>
          <li>ngOnInit -> Quando o component é inicializado . </li>
          <li>ngDoCheck -> A cada ciclo de verificação de mudanças .</li>
          <li>ngAfterContentInit -> Depois de inserir conteúdo externo na view .</li>
          <li>ngAfterContentChecked -> A cada verificação de conteudo inserido. </li>
          <li>ngAfterViewChecked -> a cada verificação de conteudo / Conteudo filho. </li>
          <li>ngOnDestroy -> antes da diretiva/Component ser destruido. </li>
        </ul>        
        `
    }

  }
}
