import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value:number,param:string):any{
    // return null;
    if(param == "prime")
    {
      let isPrime = true;
      for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${value} is a prime number`);
        return `${value} is a prime number`;

    } else {
        console.log(`${value} is a not prime number`);
        return `${value} is a not prime number`;
    }
    //  console.log("hellooo")
  
    }
    if(param == "perfect")
    {
      var temp = 0;
      for(var i=1;i<=value/2;i++)
     {
         if(value%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === value && temp !== 0)
        {
       console.log("It is a perfect number.");
       return("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
       return("It is not a perfect number.");
        }   
      } 
      if(param == "even")
      {
        if(value % 2 == 0) {
          console.log("The number is even.");
          return("The number is even.");
      }
      
      // if the number is odd
      else {
          console.log("The number is not even number.");
          return("The number is not even number.");
      }
      }
      if(param == "odd")
    {
      if(value % 2 == 0) {
        console.log("The number is not Odd Number.");
        return("The number is even.");
    }
    
    // if the number is odd
    else {
        console.log("The number odd number.");
        return("The number odd number.");
    }
    }
}
   
    
  }
