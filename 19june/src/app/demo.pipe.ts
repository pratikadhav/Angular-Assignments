import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {
// <h1>{{"Marvellous Pune"| demo:"PPA":"Python":"Angular"}}</h1>


  transform(value: unknown, ...args: unknown[]): unknown //unknown is similar to any
  {

    var str:string="";

if(args[0]=="PPA")
{
  str="Batch Starts from 9th July in " +value
}
return str;

}
}
//custom pipe interview