import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
import {matchingPasswords} from '../../Validator/validator';
@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl(null, Validators.required)
    }, {validator: matchingPasswords('password', 'cpassword')})
  }


  onSubmit() {
    this.userService.onSignUp(this.myForm.value.email, this.myForm.value.password);
  }
}
