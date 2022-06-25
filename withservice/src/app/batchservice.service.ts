import { Injectable } from '@angular/core';
import{IBatches} from './Batches';//import
import { Observable } from 'rxjs';//import
import { HttpClient } from '@angular/common/http';//import

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService 
{
  //Logic
  //Connection to server
  private URL='./assets/Data/Batches.json';//Url server chi link 
  
  constructor(private _obj:HttpClient) { }//Dependencies Injection http module ch injection

  public GetBatches():Observable<IBatches[]>// return value ahe ti IBaches[] obeservable Void Star return karnar ahe
  {
    return this._obj.get<IBatches[]>(this.URL);// characterstic obj get Method
  }
  
}
