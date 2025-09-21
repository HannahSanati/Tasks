import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/resource-management/header/header';
import { Table } from './components/resource-management/table/table';
import { Navbar } from './components/zanjan-event/navbar/navbar';
import { ScheduleCard } from './components/zanjan-event/schedule-card/schedule-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Table, Navbar, ScheduleCard,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Zino');
}


