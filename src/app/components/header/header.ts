import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService, Resource } from '../../services/resource.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  newResourceName = '';
  newResourcePrice = 0;
  newDayName = '';
  newDayFactor = 1;

  private resourceService = inject(ResourceService);

  addResource() {
    ///first we need to validate so I put:
    if (!this.newResourceName || this.newResourcePrice <= 0) return;

    ///////now create object for new resource
    const newResource: Resource = {
      name: this.newResourceName,
      basePrice: this.newResourcePrice,
      days: this.resourceService.days.map(d => ({ ...d })) 
    };
/////////its time to send the new resource to the backend but now i send to db.json with HTTP
/////retuns it as an observable and insid it here we have callback function and its runs after http request
    this.resourceService.addResource(newResource).subscribe(() => {
      ///// here i fetch our list
      this.resourceService.getResources().subscribe();
      //// now i need clear the input fields in the form so my user can add new resource
      this.newResourceName = '';
      this.newResourcePrice = 0;
    });
  }
  addDay() {
    if (!this.newDayName || this.newDayFactor <= 0) return;

    const day = this.resourceService.days.find(d => d.name === this.newDayName);
    if (day) day.factor = this.newDayFactor;

    this.resourceService.getResources().subscribe(resources => {
      resources.forEach(res => this.resourceService.updateResource(res).subscribe());
    });
    this.newDayName = '';
    this.newDayFactor = 1;
  }
}