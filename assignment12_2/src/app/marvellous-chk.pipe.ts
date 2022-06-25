import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value:number, param:string):any{
    // return null;
    if(param == "prime")
    {
      value =11;
      let temp =value+value;
      return temp;
     console.log("hellooo")
    }
    if(param == "perfect")
    {
     console.log("Perfect")
    }
    if(param == "even")
    {
     console.log("Even")
    }
    if(param == "odd")
    {
     console.log("Odd")
    }
  }

}
