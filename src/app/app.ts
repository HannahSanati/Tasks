import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationFlow } from "./components/authentication-flow/authentication-flow";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, AuthenticationFlow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}


