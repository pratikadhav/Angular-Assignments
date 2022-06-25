import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number, param:number): number {
    let ans :number= 0;
    ans=value*param;
    return ans; 
  }

}
