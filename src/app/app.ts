import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";

@Component({
  selector: 'app-root',
  imports: [ Header, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}
