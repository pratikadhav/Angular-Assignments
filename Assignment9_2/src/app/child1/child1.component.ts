import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template: `
    <h1>Number 4 is a Prime Number :{{Prime}}</h1>
  `
})
export class Child1Component implements OnInit {

  public Prime:any;
  constructor(private _obj:NumberService) 
  { }

  ngOnInit(): void 
  {
    this.Prime=this._obj.ChkPrime(4);
  }

}
