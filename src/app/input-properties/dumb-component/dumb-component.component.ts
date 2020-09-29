import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css']
})
export class DumbComponentComponent implements OnInit {

  @Input() Title :String;
  @Input() Description :String;
  @Input() Color:String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
