import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}
  public logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
