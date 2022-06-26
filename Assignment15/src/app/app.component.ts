import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator, MaxLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment14';
  state=['Select state','Maharashtra','Gujrat','Uttar Pradesh'];

  constructor(public fobj : FormBuilder)
  {

  }
  AssignmentForm =this.fobj.group({
    firstname :['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
    lastname :['', [Validators.required] ],
    email :['', [Validators.required, Validators.email] ],
    phone :['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10)] ],
    city :['', [Validators.required,Validators.minLength(4)]],
    state :['', [Validators.required] ],
    zip :['', [Validators.required, Validators.minLength(5),Validators.maxLength(5)] ]

  })
}
