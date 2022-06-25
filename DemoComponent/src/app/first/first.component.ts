import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
  // styleUrls: ['./first.component.css']
})

export class FirstComponent 
{
    //characteristic
    name:string="Pratik Ashok Adhav"

    //Behaviour
    Display():string
    {
      var ret:string="Helloo "+ this.name;
      return ret;
    }


    Addition(no1:number,no2:number):number
    {
        return no1+no2;
    }
}


