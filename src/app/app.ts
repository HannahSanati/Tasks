import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationFlow } from "./components/authentication-flow/authentication-flow";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthenticationFlow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}


