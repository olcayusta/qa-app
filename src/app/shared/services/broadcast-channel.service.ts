import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface BroadcastMessage {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {
  private broadcastChannel: BroadcastChannel;

  constructor() {
    this.broadcastChannel = new BroadcastChannel('demo');
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  getMessages(): Observable<MessageEvent> {
    return new Observable((observer) => {
      this.broadcastChannel.onmessage = (message: MessageEvent) => observer.next(message);
      this.broadcastChannel.onmessageerror = (message: MessageEvent) => observer.error(message);
      return () => this.broadcastChannel.close();
    });
  }
}
