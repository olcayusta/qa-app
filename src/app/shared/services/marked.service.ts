import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {
  markedWorker!: Worker;
  isAlive = false;

  constructor(private domSanitizer: DomSanitizer) {
    this.createWorker();
  }

  createWorker() {
    this.markedWorker = new Worker(new URL('../tasty.worker', import.meta.url));
    this.isAlive = true;
  }

  getMessages(): Observable<SafeHtml> {
    return new Observable((subscriber) => {
      this.markedWorker.onmessage = ({ data }) => subscriber.next(data);
      this.markedWorker.onerror = (err) => subscriber.error(err);
    });
  }

  destroyWorker() {
    this.markedWorker.terminate();
    this.isAlive = false;
  }
}
