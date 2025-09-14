import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService, Resource, DayFactor } from '../../services/resource.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class Table implements OnInit {
  resources: Resource[] = [];
  private resourceService = inject(ResourceService);

  ngOnInit(): void {
    this.loadResources();
  }
  get dayNames(): string[] {
    return this.resourceService.days.map(d => d.name);
  }
  get days() {
    return this.resourceService.days;
  }
////////// i want this for showing on the table!
  loadResources(): void {
    this.resourceService.getResources().subscribe(res => {
      this.resources = res;
    });
  }
  ////// if we want info about specific day ( factor and checked status),we should call this function instead of searching manually each time. 
  getDayForResource(resource: Resource, dayName: string): DayFactor {
    return resource.days.find(d => d.name === dayName)!;
  }

  ///////send to db.json the checkbox state
  toggleDay(resource: Resource, day: DayFactor): void {
    day.checked = !day.checked;
    this.resourceService.updateResource(resource).subscribe();
  }
  getTotal(resource: Resource): number {
    return resource.days.reduce(
      (total, day) => total + (day.checked ? resource.basePrice * day.factor : 0),
      0
    );
  }
}