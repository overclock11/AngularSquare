import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/index';
import * as firebase from 'firebase';

@Injectable()
export class AutorizacionService {

  constructor(private angularAut: AngularFireAuth) {
    this.isLogged();
  }

  login(email,password){
    console.log(email,password);
    return this.angularAut.auth.signInWithEmailAndPassword(email,password);
  }
  facebookLogin(): Promise<any> {
    return this.angularAut.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  registro(email,password){
    console.log(email,password);
    return this.angularAut.auth.createUserWithEmailAndPassword(email,password);
  }

  isLogged(){
    return this.angularAut.authState;
  }

  logout(): Promise<any>{
    return this.angularAut.auth.signOut();
  }
}
