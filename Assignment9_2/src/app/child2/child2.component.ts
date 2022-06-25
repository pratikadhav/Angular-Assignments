import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `
  <h1>No of capital letters in MarVellouS: {{String}}</h1>
  `
})
export class Child2Component implements OnInit {

  public String:any="";
  constructor(private _obj:StringService) 
  { }

  ngOnInit(): void 
  {
    this.String=this._obj.CountCapital("MarVellouS");
  }

}
