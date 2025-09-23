import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { Panel } from "./panel/panel";
import { CommonModule } from '@angular/common';
import { Login } from "./auth/login/login";

@Component({
  selector: 'app-authentication-flow',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './authentication-flow.html',
  styleUrl: './authentication-flow.scss',
  standalone: true,
})
export class AuthenticationFlow {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }
}