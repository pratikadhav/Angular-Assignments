import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value:number, param:number): number {
    let ans :number= 0;
    ans=value+param;
    return ans;  
  }

}
