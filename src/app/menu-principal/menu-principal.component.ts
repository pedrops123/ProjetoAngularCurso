import { TileMenu } from './../models/TileMenu';
import { MenuPrincipalService } from './menu-principal.service';
import { DadosUser } from './../models/DadosUser';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DadosMenu } from '../models/DadosMenu';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as $ from 'jquery';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'menu-principal-component',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent {

  infoUser:DadosMenu;
  idArray:String[] =  [];
  buttonVisible:boolean; 
  
  /*
  controleMenuExpansivo = new FlatTreeControl<ExampleFlatNode>(node=>node.level , node =>node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.childs);

  dataSource = new MatTreeFlatDataSource(this.controleMenuExpansivo,this.treeFlattener);
*/




  constructor(private MenuPrincipalService:MenuPrincipalService) {
    var dados =  this.MenuPrincipalService.getInformacaoUser();
    this.infoUser = dados
    this.infoUser.dadosArvore.map(r => r.childs.map( r => this.idArray.push(r.href) ));
    //this.dataSource.data = dados.dadosArvore;
  }


  ngOnInit(): void {

  }
  
  scrollToElement($element): void {
   var elementoDOM = document.getElementById($element);
   elementoDOM.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
   
  }

  mostraEstadoFilho($event){
    console.log("Pagina Pai recebeu valor de filho event-output");
    console.log($event);
  }


ValidaScroll($event){

  /* Valida Botão subir topo */
    var scrollAtual = $event.target.scrollTop;
    
    if(scrollAtual > 700)
    {
      this.buttonVisible = true;
    }
    else
    {
      this.buttonVisible = false;
    }

    /* Valida cor links */

    this.idArray.forEach(r =>{
      var testId = Math.abs(document.getElementById(r.toString()).getBoundingClientRect().top);
        if (scrollAtual >= testId){
            //console.log(testId);
            //console.log(scrollAtual);
            console.log(r);
        }

      console.log(testId);
    });


}


  /*
   scrollListener($event) {
    var title = document.getElementById("titlePrincipal");
    var elmTop = title.getBoundingClientRect().top + window.scrollY;

    this.idArray.forEach(r => {
      var teste = document.getElementById(r.toString());
      if (teste.offsetTop == elmTop){
          console.log(r);
      }
      //console.log(teste);

    });

    }
*/



}



