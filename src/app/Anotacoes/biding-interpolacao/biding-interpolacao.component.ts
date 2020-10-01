import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Anotacoes-biding-interpolacao',
  templateUrl: './biding-interpolacao.component.html',
  styleUrls: ['./biding-interpolacao.component.css']
})
export class BidingInterpolacaoComponent implements OnInit {

  tagInterpolacao:String = "{{ }}";

  constructor() { }

  ngOnInit(): void {
  }

}
