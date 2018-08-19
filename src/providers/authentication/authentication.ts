import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebase } from 'firebase';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

  register(credentials): Promise {
    return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  login(credentials): Promise {
      return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  loginAsGuest(): Promise {
      return firebase.auth().signInAnonymously();
  }

  logout(): Promise {
      return firebase.auth().signOut();
  }

}
