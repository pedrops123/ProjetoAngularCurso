import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngIfExample',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  valorCombo:number = 1;

  constructor() { 
    this.valorCombo = 1;
  }

  ngOnInit(): void {
  }

}
