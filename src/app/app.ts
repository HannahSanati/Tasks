import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../app/components/resource-management/header/header";
import { Table } from "../app/components/resource-management/table/table";
import { Navbar } from "./components/zanjan-event/navbar/navbar";
import { ScheduleCard } from "./components/zanjan-event/schedule-card/schedule-card";
import { ZanjanEvent } from './components/zanjan-event/zanjan-event';
import { AuthenticationFlow } from "./components/authentication-flow/authentication-flow";

@Component({
  selector: 'app-root',
  imports: [ZanjanEvent, AuthenticationFlow, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}


// Header, Table, Navbar, ScheduleCard,