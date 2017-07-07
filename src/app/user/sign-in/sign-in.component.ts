import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required])
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
