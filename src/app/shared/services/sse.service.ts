import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private zone: NgZone) {}

  getMessages(): Observable<any> {
    return new Observable<any>((subscriber) => {
      const eventSource = new EventSource(environment.SSE_URL);
      eventSource.addEventListener('message', (ev) => {
        subscriber.next(JSON.parse(ev.data));
      });
      eventSource.addEventListener('add', (ev) => {
        subscriber.next(JSON.parse(ev?.data));
      });
      eventSource.onerror = (err) => {
        subscriber.error(err);
      };
      return () => eventSource.close();
    });
  }
}
