import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ListenerBidingDirective]'
})
export class DirectiveBidingListenerDirective {

  @HostBinding('style.backgroundColor') background : string;

  @HostBinding('style.color') corFonte :string;

  @HostBinding('style.width') width :string;

  @HostBinding('style.height') height :string;

  constructor(private Elemento:ElementRef , private renderer:Renderer2 ) { 
      this.background = 'black';
      this.width = "90px";
      this.height = "90px";
      this.corFonte = "white";
      //this.renderer.setStyle(this.Elemento.nativeElement , 'width' , '90px');
      //this.renderer.setStyle(this.Elemento.nativeElement , 'height' , '90px');
    }

  @HostListener('mouseover') mouseOver(){
    this.background = 'white';
    this.corFonte = 'black';
  }


  @HostListener('mouseleave') mouseLeave(){
      this.background = 'black';
      this.corFonte = 'white';
  }

}
