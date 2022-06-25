import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent 
{
  
  public str="Marvellous Infosystems";
  public Gun()
  {
    this.str="Educating for better tomorrow";
  }
  
}
