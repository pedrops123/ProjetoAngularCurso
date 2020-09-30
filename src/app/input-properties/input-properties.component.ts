import { Component, OnInit } from '@angular/core';
import { ModeloInputProperties } from '../models/ModeloInputProperties';
import { InputPropertiesService } from './input-properties.service';

@Component({
  selector: 'input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})

export class InputPropertiesComponent implements OnInit {


  dadosProperties:ModeloInputProperties[];

  constructor(ServiceInputProperties:InputPropertiesService) { 
  
      this.dadosProperties = ServiceInputProperties.montaDadosInputProperties();
  }

  ngOnInit(): void {
  }

}
