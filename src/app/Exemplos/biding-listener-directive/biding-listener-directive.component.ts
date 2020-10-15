import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-bl-directives',
  templateUrl: './biding-listener-directive.component.html',
  styleUrls: ['./biding-listener-directive.component.css']
})
export class BidingListenerDirectiveComponent implements OnInit {

  nomeDiretiva:string;

  constructor() {

    this.nomeDiretiva = "Biding e Listeners com diretivas customizadas"

   }

  ngOnInit(): void {
  }

}
