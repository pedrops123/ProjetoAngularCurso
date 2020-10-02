import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'life-cicle-example',
  templateUrl: './life-cicle-component.component.html',
  styleUrls: ['./life-cicle-component.component.css']
})


export class LifeCicleComponentComponent  implements OnInit {


mostraComponent:boolean = false;

  constructor() {
   
   }

  ngOnInit(): void {

  }

  setValueMostraComponent(){
       this.mostraComponent ? this.mostraComponent = false : this.mostraComponent = true;
  }
}
