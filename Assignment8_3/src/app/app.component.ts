import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment8_3';
  // public str="Hellooo"

  public Message: any="Helloo";
  public msgLength:any=this.Message.length;
}
