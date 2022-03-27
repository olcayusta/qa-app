import { Injectable, NgZone } from '@angular/core';
import { Observable, OperatorFunction, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  constructor(private ngZone: NgZone) {
    this.broadcastChannel = new BroadcastChannel('broadcastChannelName');
    this.broadcastChannel.onmessage = (message) => this.onMessage.next(message);
  }

  publish(message: BroadcastMessage): void {
    this.broadcastChannel.postMessage(message);
  }

  messages(message: string) {
    return new Observable((subscriber) => {
      this.broadcastChannel.onmessage = (message) => subscriber.next(message);
    });
  }

  messagesOfType(type: string): Observable<BroadcastMessage> {
    return this.onMessage.asObservable();
  }
}

/**
 * Custom OperatorFunction that makes sure that all lifecycle hooks of an Observable
 * are running in the NgZone.
 */
export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
  return (source) => {
    return new Observable((observer) => {
      const onNext = (value: T) => zone.run(() => observer.next(value));
      const onError = (e: any) => zone.run(() => observer.error(e));
      const onComplete = () => zone.run(() => observer.complete());
      return source.subscribe(onNext, onError, onComplete);
    });
  };
}
