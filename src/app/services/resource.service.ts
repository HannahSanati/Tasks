import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DayFactor {
  name: string;
  factor: number;
  checked: boolean;
}

export interface Resource {
  id?: number;
  name: string;
  basePrice: number;
  days: DayFactor[];
}

@Injectable({
    providedIn: 'root'
  })
  
export class ResourceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/resources`;

  constructor() {}
  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.apiUrl, resource);
  }

  updateResource(resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.apiUrl}/${resource.id}`, resource);
  }

  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

// updateDayFactor(dayName: string, factor: number) {
//   this.days = this.days.map(d => d.name === dayName ? { ...d, factor } : d);
// }

days: DayFactor[] = [
  { name: 'شنبه', factor: 1.2, checked: false },
  { name: 'یکشنبه', factor: 1.0, checked: false },
  { name: 'دوشنبه', factor: 1.1, checked: false }
];
}