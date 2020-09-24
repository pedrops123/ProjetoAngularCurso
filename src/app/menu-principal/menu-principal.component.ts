import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'menu-principal-component',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent{

  NomeUsuario: String;
  Cargo: String;
  UrlFoto: String;
  
  constructor() { 

    
  }

  ngOnInit(): void {

  }
}



