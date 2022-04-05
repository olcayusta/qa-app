import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface BroadcastMessage {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {
  private broadcastChannel: BroadcastChannel;
  private onMessage = new Subject<any>();

  constructor() {
    this.broadcastChannel = new BroadcastChannel('broadcastChannelName');
    this.broadcastChannel.onmessage = (message) => this.onMessage.next(message);
    this.broadcastChannel.onmessageerror = (message) => this.onMessage.error(message);
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  messages(message: string) {
    return new Observable((subscriber) => {
      this.broadcastChannel.onmessage = (message) => subscriber.next(message);
    });
  }

  getMessages() {
    return new Observable(subscriber => {
      this.broadcastChannel.onmessage = (message) => {
        subscriber.next(message);
      };
      this.broadcastChannel.onmessageerror = (message) => {
        subscriber.error(message);
      };
      return () => this.broadcastChannel.close();
    });
  }

  messagesOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessage.asObservable();
  }
}
