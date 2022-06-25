import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }
  public Message: any;
  getValue(val:any)
  {
    this.Message=val;
  }

}
