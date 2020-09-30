import { TileMenu } from './../models/TileMenu';
import { MenuPrincipalService } from './menu-principal.service';
import { DadosUser } from './../models/DadosUser';
import { Component, OnInit } from '@angular/core';
import { DadosMenu } from '../models/DadosMenu';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';


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


  private _transformer = (node: TileMenu, level: number) => {
    return {
      expandable: !!node.childs && node.childs.length > 0,
      name: node.node ,
      level: level,
    };
  }

  infoUser:DadosMenu;
  
  /*
  controleMenuExpansivo = new FlatTreeControl<ExampleFlatNode>(node=>node.level , node =>node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.childs);

  dataSource = new MatTreeFlatDataSource(this.controleMenuExpansivo,this.treeFlattener);
*/




  constructor(private MenuPrincipalService:MenuPrincipalService) {
    var dados =  this.MenuPrincipalService.getInformacaoUser();
    this.infoUser = dados
    //this.dataSource.data = dados.dadosArvore;
  }


  ngOnInit(): void {

  }
  
  scrollToElement($element): void {
   var elementoDOM = document.getElementById($element);
   elementoDOM.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
   
  }


}



