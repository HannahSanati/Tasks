import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
/////////////////// replace these to models :))))
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

@Injectable({ providedIn: 'root' })
export class ResourceService {

  private apiUrl = environment.apiUrl;

  private reloadsignal$ = new BehaviorSubject (new Date().getTime());
///////encapsolation
  public reloadsignal = this.reloadsignal$.asObservable();

  days: DayFactor[] = [
    { name: 'شنبه', factor: 1, checked: false },
    { name: 'یکشنبه', factor: 1, checked: false },
    { name: 'دوشنبه', factor: 1, checked: false },
    { name: 'سه شنبه', factor: 1, checked: false },
    { name: 'چهارشنبه', factor: 1, checked: false },
    { name: 'پنجشنبه', factor: 1, checked: false },
    { name: 'جمعه', factor: 1, checked: false }
  ];

  constructor(private http: HttpClient) {}

  reloadTable() {
    this.reloadsignal$.next(new Date().getTime());
  }
  //////////here we go with our CRUD :))))))
  /////returns an Observable so we subscribe to it in our components
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
  ///////// i can add delete yohoooo!
}