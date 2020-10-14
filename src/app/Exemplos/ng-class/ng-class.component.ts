import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplo-ngClass',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  nomeDiretiva:string;
  deletado:boolean = false;

  constructor() {
    this.nomeDiretiva = "Ng Class"
   }

  ngOnInit(): void {
  }


  clickDeletado(){
    this.deletado = !this.deletado;
 
  }

}
