import { AfterContentInit, AfterViewChecked, AfterViewInit ,AfterContentChecked, Component, OnInit, OnChanges, DoCheck, SimpleChanges, OnDestroy } from '@angular/core';


@Component({
  selector: 'div-life-cicle',
  templateUrl: './component-file-cicle.component.html',
  styleUrls: ['./component-file-cicle.component.css']
})
export class ComponentFileCicleComponent implements OnInit, OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy  {


  mostraComponent:boolean = false;

  constructor() {
    this.print("Construtor");
   }

  ngOnInit(): void {
    this.print("NgOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.print("NgOnChanges");
  }
  ngDoCheck(): void {
    this.print("NgDoCheck");
  }
  ngAfterContentInit(): void {
    this.print("NgAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.print("NgAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.print("NgAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.print("NgAfterViewChecked");
  }
  ngOnDestroy(): void {
    this.print("NgOnDestroy");
  }

  print(descricao:String){
    console.log(descricao);
  }


}
