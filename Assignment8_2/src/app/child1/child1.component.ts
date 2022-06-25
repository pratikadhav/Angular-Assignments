import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  message="Hello Parent Component"
  constructor() { }
  @Output() event = new EventEmitter()
  ngOnInit(): void {
  }

  sendMessage(){
    this.event.emit(this.message)
  }
}
