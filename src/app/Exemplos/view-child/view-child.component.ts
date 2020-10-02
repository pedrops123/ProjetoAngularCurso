import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'Example_child_component',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('elemento1') El1:HTMLElement;
  @ViewChild('elemento2') El2:HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }


  mostraConsoleDetalhesEL1(){
    console.log(this.El1);
  }


  mostraConsoleDetalhesEL2(){
    console.log(this.El2);
  }

}
