import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): unknown {
    if (!value) return;
    const markedValue = marked.parse(value);
    return this.sanitizer.bypassSecurityTrustHtml(markedValue);
  }
}
