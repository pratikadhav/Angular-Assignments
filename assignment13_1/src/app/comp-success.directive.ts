import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
{

  constructor(private eobj:ElementRef) 
  {}
    @HostListener('mouseenter')onmouseenter()
    {
      this.eobj.nativeElement.style.color ='Green';
    }
    @HostListener('mouseleave')onmouseleave()
    { 
      this.eobj.nativeElement.style.color ='black';
    }
  
}
