import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {
  // Connection to a broadcast channel
  bc = new BroadcastChannel('test_channel');

  constructor() {
  }

  sendMessage(message: string) {
    // Example of sending of a very simple message
    this.bc.postMessage(message);
  }

  getMessage(): Observable<MessageEvent> {
    // A handler that only logs the event to the console:
    return new Observable((subscriber => {
      this.bc.onmessage = (ev) => {
        subscriber.next(ev)
      }
      this.bc.onmessageerror = ((ev) => {
        subscriber.error(ev)
      })
    }))
  }
}
