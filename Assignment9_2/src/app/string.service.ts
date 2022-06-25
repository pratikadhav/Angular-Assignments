import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() 
  { }
  CountCapital(str:string)
  {
   
    var numUpper = (str.match(/[A-Z]/g) || []).length;
    console.log(numUpper);
    return numUpper;
  }
}
