import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private eobj:ElementRef) { }

   @HostBinding('style.backgroundColor') color = "red"; 
}
