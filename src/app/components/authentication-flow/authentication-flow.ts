import { Component } from '@angular/core';
import { Login } from "./login/login";

@Component({
  selector: 'app-authentication-flow',
  imports: [Login],
  templateUrl: './authentication-flow.html',
  styleUrl: './authentication-flow.scss'
})
export class AuthenticationFlow {

}
