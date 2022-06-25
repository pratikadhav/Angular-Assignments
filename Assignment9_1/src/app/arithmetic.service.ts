import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{
    constructor()
    {
    }
    Add(No1:any,No2:any)
    {
        var Ans:number=0;
        Ans=No1+No2;
        return Ans;
    }
    Sub(No1:any,No2:any)
    {
        var Ans:number=0;
        Ans=No1-No2;
        return Ans;
    } 
}
