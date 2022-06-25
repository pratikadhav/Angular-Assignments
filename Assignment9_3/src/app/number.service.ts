import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(num:any){
    if (num % 2 == 0 && num > 2) return false; 
    var s = Math.sqrt(num);
    for(let i = 3; i <= s; i += 2) { 
        if(num % i === 0) return false;
    }
    return true;
  }
}
