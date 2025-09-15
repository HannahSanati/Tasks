import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../app/components/resource-management/header/header";
import { Table } from "../app/components/resource-management/table/table";
import { Navbar } from "./components/zanjan-event/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Header, Table, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}
