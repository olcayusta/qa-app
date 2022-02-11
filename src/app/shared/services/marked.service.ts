import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkedService {
  constructor() {}

  setMarked(text: string): void {
    marked.parse(text, (error, parseResult) => {
      console.log(parseResult);
    });
  }
}
