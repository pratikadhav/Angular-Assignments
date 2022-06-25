import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'//directive name
})
export class HelloDirective
{


  constructor(private eobj:ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.color ='white';
    this.eobj.nativeElement.style.background ='navy';
  }
  
  @HostListener('mouseleave')onmouseleave()
  { 
    this.eobj.nativeElement.style.color ='blue';
    this.eobj.nativeElement.style.background ='cyan';
  }
  //logic
}
