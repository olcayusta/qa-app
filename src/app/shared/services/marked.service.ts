import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {
  worker: Worker = new Worker(new URL('../tasty.worker', import.meta.url));

  constructor(private domSanitizer: DomSanitizer) {}

  workerMessages(): Observable<SafeHtml> {
    return new Observable((subscriber) => {
      this.worker.onmessage = ({ data }) => {
        subscriber.next(this.domSanitizer.bypassSecurityTrustHtml(data));
      };
      this.worker.onerror = (err) => {
        subscriber.error(err);
      };
    });
  }

  /*  setMarked(text: string): void {
    marked.parse(text, (error, parseResult) => {
      console.log(parseResult);
    });
  }*/
}
