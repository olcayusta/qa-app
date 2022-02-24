import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private zone: NgZone) {}

  observerMessages(sseUrl: string): Observable<any> {
    return new Observable<any>((subscriber) => {
      const es = new EventSource(sseUrl);
      es.addEventListener('message', (ev) => {
        subscriber.next(JSON.parse(ev.data));
      });
      es.addEventListener('add', (ev) => {
        // @ts-ignore
        subscriber.next(JSON.parse(ev?.data));
      });
      es.onerror = (err) => {
        subscriber.error(err);
      };
      return () => es.close();
    });
  }
}
