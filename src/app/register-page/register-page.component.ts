import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}
  public register(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('Thank you for registering!');
      })
      .catch((error) => window.alert(error.message));
  }
}
