import { Component } from '@angular/core';
import { Header } from "./header/header";
import { ScheduleCard } from "../zanjan-event/schedule-card/schedule-card";
import { Table } from "./table/table";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-resource-management',
  imports: [
    Header,
    Table,
    RouterModule
],
  templateUrl: './resource-management.html',
//   styleUrl: './resource-management.scss',
})
export class ResourceManagement {}
