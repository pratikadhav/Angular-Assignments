import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private eobj:ElementRef) { }
  @HostListener('mouseenter')onmouseenter()
  {
    this.eobj.nativeElement.style.color ='Red';
  }
  @HostListener('mouseleave')onmouseleave()
  { 
    this.eobj.nativeElement.style.color ='black';
  }
}
