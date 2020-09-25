import { MenuPrincipalService } from './menu-principal.service';
import { DadosUser } from './../models/DadosUser';
import { Component, OnInit } from '@angular/core';
import { DadosMenu } from '../models/DadosMenu';

@Component({
  selector: 'menu-principal-component',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent {

  infoUser:DadosMenu;
  
  constructor(private MenuPrincipalService:MenuPrincipalService) { 

    this.infoUser = this.MenuPrincipalService.getInformacaoUser();
  }


  ngOnInit(): void {

  }
}



