import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  getOptions() {
    return ['Painting', 'Programming', 'Poetry', 'Music', 'Sports'];
  }
}