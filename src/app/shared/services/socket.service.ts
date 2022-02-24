import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { delay, retryWhen, tap } from 'rxjs/operators';

enum socketEvent {
  newAnswer = 'new answer',
  message = 'message'
}

interface SubjectData {
  event: string;
  payload: object;
}

type eventType = 'new answer' | 'message' | 'hello';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject: WebSocketSubject<SubjectData> = webSocket({
    url: environment.WS_URL,
    protocol: <string>localStorage.getItem('token')
  });

  constructor() {
    // this.connect();
    /*    this.subject.next({
      event: 'hello',
      payload: {
        celebName: 'Dua Lipa',
      },
    });*/
  }

  reconnect() {
    this.subject
      .pipe(
        retryWhen((errors) =>
          errors.pipe(
            tap((err) => {
              console.error('Got error', err);
            }),
            delay(1000)
          )
        )
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

  sendMessage(message: string) {
    this.subject.subscribe();
    this.subject.next({
      event: socketEvent.message,
      payload: {
        content: message
      }
    });
  }

  on(event: eventType): Observable<{ event: string; payload: object }> {
    return new Observable((subscriber) => {
      this.subject.subscribe((data) => {
        if (data.event === event) {
          subscriber.next(data);
        }
      });
    });
  }

  /**
   * Connect to the websocket
   */
  connect(): void {
    this.subject.subscribe();
  }

  /**
   * Disconnect from the server
   */
  disconnect(): void {
    this.subject.unsubscribe();
  }
}
