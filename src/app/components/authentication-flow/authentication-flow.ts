import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { Panel } from "./panel/panel";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication-flow',
  imports: [RouterOutlet, CommonModule],

  templateUrl: './authentication-flow.html',
  styleUrl: './authentication-flow.scss'
})
export class AuthenticationFlow {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['authentication-flow/login']);
  }
}