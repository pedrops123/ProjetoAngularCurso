import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ExampleDiv]'
})
export class ExampleDivDirective {

  constructor(private Elemento:ElementRef , private renderer:Renderer2) { 

    /* Forma incorreta  
      this.Elemento.nativeElement.style.backgroundColor = 'black';
      this.Elemento.nativeElement.style.height = '90px';
      this.Elemento.nativeElement.style.width  = '90px';
      this.Elemento.nativeElement.style.color  = 'white';
    */

    /* Forma Correta */
      this.renderer.setStyle(this.Elemento.nativeElement , 'background-color','black');
      this.renderer.setStyle(this.Elemento.nativeElement , 'width' , '90px');
      this.renderer.setStyle(this.Elemento.nativeElement , 'height' , '90px');
      
      console.log(this.Elemento);

  }

}
