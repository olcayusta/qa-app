import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: any, ...args: any): unknown {
    if (!args) {
      return value;
    } else {
      const re = new RegExp(args, 'gi');
      return value.replace(re, `<mark>$&</mark>`);
    }
  }
}
