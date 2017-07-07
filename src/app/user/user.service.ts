import * as firebase from 'firebase';
import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class UserService implements OnInit {
  token: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
  }

  onLogin(email: string, password: string) {
    console.log('hello');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            this.route.navigate(['../']);
          })
      })
      .catch(error => console.log(error)
      )
    ;
  }

  onSignUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error)
      )
    ;
  }

  ForgotPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuthenticate() {
    return this.token != null;
  }

  onLogout() {
    firebase.auth().signOut();
  }
}
