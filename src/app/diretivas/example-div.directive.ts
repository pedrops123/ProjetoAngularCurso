import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ExampleDiv]'
})
export class ExampleDivDirective implements AfterViewInit  {

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
      this.renderer.setStyle(this.Elemento.nativeElement , 'color' , 'deepskyblue');
    
      console.log(this.Elemento);
  }


  ngAfterViewInit(){
    console.log("Faz mudanca apos renderizar");
    let tagP = this.Elemento.nativeElement.querySelector("p");
    this.renderer.setStyle(tagP,'margin-top','30%');
    //console.log(tagP);
  }



}
