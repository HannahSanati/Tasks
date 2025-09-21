import { Component } from '@angular/core';
import { Header } from "./header/header";
import { ScheduleCard } from "../zanjan-event/schedule-card/schedule-card";
import { Table } from "./table/table";

@Component({
  selector: 'app-resource-management',
  imports: [
    Header,
    ScheduleCard,
    Table
],
  templateUrl: './resource-management.html',
//   styleUrl: './resource-management.scss',
})
export class ResourceManagement {}
