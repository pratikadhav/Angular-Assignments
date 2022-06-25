import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  template:`
  <h1>Addition is {{Answer}}</h1> 
  <h1>Subtraction is {{Answer1}}</h1> 
  `,
})
export class DemoComponent implements OnInit {

  public Answer:any=0;
  public Answer1:any=0;
  constructor(private _obj:ArithmeticService) 
  { }

  ngOnInit(): void {
    this.Answer=this._obj.Add(10,20);
    this.Answer1=this._obj.Sub(20,10);
  }
}
