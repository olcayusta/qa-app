import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedTag'
})
export class SelectedTagPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
