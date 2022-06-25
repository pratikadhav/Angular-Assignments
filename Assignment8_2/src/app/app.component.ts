import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Data:any;
  public msg="Hello Child Component";
  title = 'Assignment8-2';

  message: any
  recieveMessage($event:any)
  {
    this.message=$event
  }
}
