import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent{

  public str:any="";
  public Fun()
  {
    this.str="Marvellous Infosystem";
    return this.str;
  }
}