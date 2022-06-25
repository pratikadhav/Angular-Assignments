import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent {

  public str="Marvellous";
  public str1="";
  
  public upper(){
    this.str = this.str.toUpperCase( )
    this.str1="Uppercase Clicked"
  }

  public lower(){
    this.str = this.str.toLowerCase( )
    this.str1="Lowercase Clicked"
  }
}
