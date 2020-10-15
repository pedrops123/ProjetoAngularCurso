import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'BInterpolacao',
  templateUrl: './biding-interpolacao.component.html',
  styleUrls: ['./biding-interpolacao.component.css']
})
export class BidingInterpolacaoComponent implements OnInit {

  urlImg:String;

  constructor() { 
    this.urlImg = "https://picsum.photos/200/300";
  }

  ngOnInit(): void {
  }

}
