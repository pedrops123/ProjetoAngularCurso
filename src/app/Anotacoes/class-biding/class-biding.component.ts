import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AnotationClassBiding',
  templateUrl: './class-biding.component.html',
  styleUrls: ['./class-biding.component.css']
})
export class ClassBidingComponent implements OnInit {

  example1:String;
  example2:String;
  example3:String;


  constructor() { 

    this.example1 = `
              <select #variavel>
                        <option value=1>opçao 1</option>
                        <option value=2>opçao 1</option>
                        <option value=3>opçao 1</option>
              </select>
                  `;


  this.example2 = `
      <select #variavel (change="0")>
            	<option value=1>opçao 1</option>
              <option value=2>opçao 1</option>
              <option value=3>opçao 1</option>
      </select>
                      `;


  
this.example3 = `
                      
        <select #variavel (change="0")>
                      <option value=1>opçao 1</option>
                      <option value=2>opçao 1</option>
                      <option value=3>opçao 1</option>
        </select>

        <h1>{{ variavel.value }}</h1>

                       ou 

        <button [class]="variavel.value"></button>`;




  }

  ngOnInit(): void {
  }

}
