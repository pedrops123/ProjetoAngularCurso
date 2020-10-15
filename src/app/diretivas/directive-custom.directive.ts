import { Directive, HostBinding, HostListener ,Input } from '@angular/core';

@Directive({
  selector: '[DirectiveCustom]'
})
export class DirectiveCustomDirective {

 
  @HostBinding('style.backgroundColor') background : string;

  @HostBinding('style.color') corFonte :string;

  @HostBinding('style.width') width :string;

  @HostBinding('style.height') height :string;


  @Input() defaultColor :string = "black";
  
  @Input() HighLightColor :string = "white";

  constructor() { 
      this.background = this.defaultColor;
      this.width = "90px";
      this.height = "90px";
      this.corFonte = "white";
      //this.renderer.setStyle(this.Elemento.nativeElement , 'width' , '90px');
      //this.renderer.setStyle(this.Elemento.nativeElement , 'height' , '90px');
    }

  @HostListener('mouseover') mouseOver(){
    this.background = this.HighLightColor;
  
  }


  @HostListener('mouseleave') mouseLeave(){
      this.background = this.defaultColor;
  }

}
