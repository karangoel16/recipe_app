import * as firebase from 'firebase';
import {Injectable, OnInit} from '@angular/core';
@Injectable()
export class UserService implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  onSignUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

}
