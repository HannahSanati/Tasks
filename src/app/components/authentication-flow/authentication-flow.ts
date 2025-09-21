import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { Login } from "./login/login";

@Component({
  selector: 'app-authentication-flow',
  imports: [Login, RouterOutlet],

  templateUrl: './authentication-flow.html',
  styleUrl: './authentication-flow.scss'
})
export class AuthenticationFlow {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}