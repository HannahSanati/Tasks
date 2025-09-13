import { Component, OnInit, inject } from '@angular/core';
import { DayFactor, Resource, ResourceService } from '../../services/resource.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table implements OnInit {
  resources: Resource[] = [];

  private resourceService = inject(ResourceService);

  ngOnInit(): void {
    this.loadResources();
  }
  get days() {
    return this.resourceService.days;
  }

  loadResources(): void {
    this.resourceService.getResources().subscribe(res => this.resources = res);
  }
  
  toggleDay(resource: Resource, day: DayFactor): void {
    day.checked = !day.checked;
    this.resourceService.updateResource(resource).subscribe(() => {
      // optionally reload if needed
      // this.loadResources();
    });
  }

  computePrice(resource: Resource, dayName: string): number {
    const day = resource.days.find(d => d.name === dayName);
    return day?.checked ? resource.basePrice * day.factor : resource.basePrice;
  }

  getTotal(resource: Resource): number {
    return resource.days.reduce(
      (total, day) => total + (day.checked ? resource.basePrice * day.factor : 0),
      0
    );
  }
}