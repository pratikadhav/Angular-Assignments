import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  template: `
  <h1>No of capital letters in "MarVellouS InFoSysTem" : {{String}}</h1>
  <h1>Number 7 is a Prime Number :{{Prime}}</h1>
  `
})
export class ChildComponent implements OnInit {

  public Prime:any;
  public String:any="";
  constructor(private _obj1:NumberService,private _obj2:StringService) 
  { }

  ngOnInit(): void {
    this.Prime=this._obj1.ChkPrime(7);
    this.String=this._obj2.CountCapital("MarVellouS InFoSysTem");
  }

}
