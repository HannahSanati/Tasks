import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLimitSelection]'
})
export class LimitSelection {
  @Input() selectedItems: any[] = [];
  @Input() limit: number = 3;

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    if (this.selectedItems.length >= this.limit) {
      alert(`You can ${this.limit} items`);
    }
  }
}