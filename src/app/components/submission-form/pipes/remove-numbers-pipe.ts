import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNumbers'
})
export class RemoveNumbersPipe implements PipeTransform  {
  transform(value: string): string {
    return value.replace(/[0-9]/g, '');
  }
}