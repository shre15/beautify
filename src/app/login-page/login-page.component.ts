import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}
  public ngOnInit() {}
  public loginwithgoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        this.router.navigateByUrl('/home');
      });
  }
  public signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => window.alert(error.message));
  }
}
