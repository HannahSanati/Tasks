import { Component, inject } from '@angular/core';
import { ResourceService, Resource, DayFactor } from '../../services/resource.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'], 
})
export class Header {
  newResourceName: string = '';
  newResourcePrice: number = 0;

  newDayName: string = '';
  newDayFactor: number = 1;

  // constructor(private resourceService: ResourceService) {}
  private resourceService = inject(ResourceService);
  // private http = inject(HttpClient);


  addResource() {
    if (!this.newResourceName || this.newResourcePrice <= 0) return;

    const newResource: Resource = {
      name: this.newResourceName,
      basePrice: this.newResourcePrice,
      days: this.resourceService.days.map(d => ({ ...d })) // clone current days
    };

    this.resourceService.addResource(newResource).subscribe(() => {
      this.resourceService.getResources().subscribe(); // reload resources
      this.newResourceName = '';
      this.newResourcePrice = 0;
    });
  }

  addDay() {
    if (!this.newDayName || this.newDayFactor <= 0) return;

    // Update the day factor locally
    // this.resourceService.updateDayFactor(this.newDayName, this.newDayFactor);

    // Update all resources in the DB
    this.resourceService.getResources().subscribe(resources => {
      resources.forEach(res => {
        this.resourceService.updateResource(res).subscribe();
      });
    });

    this.newDayName = '';
    this.newDayFactor = 1;
  }
}