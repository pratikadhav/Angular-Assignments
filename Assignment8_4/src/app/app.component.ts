import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment8_4';

  public Message: any;
  getValue(val:any)
  {
    this.Message=val;
  }
}
