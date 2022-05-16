import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
  standalone: true
})
export class MyDatePipe implements PipeTransform {
  transform(value: Date, args: string): unknown {
    const date = new Date(value);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}
