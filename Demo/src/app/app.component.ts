import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//index.html 
  templateUrl: './app.component.html',//selctor dakvla tar kay daakhvaycha
  styleUrls: ['./app.component.css']
})
// decorator
export class AppComponent {
  title = 'Demo';
  name='Pratik Ashok';
  age=26;
}
