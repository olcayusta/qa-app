import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, retry } from 'rxjs';
import { environment } from '@environments/environment';

interface SocketData {
  event: string;
  payload: object;
}

/*enum socketEvent {
  newAnswer = 'new answer',
  message = 'message'
}*/

interface SubjectData {
  event: string;
  payload: object;
}

type eventType = 'new answer' | 'message' | 'hello' | 'sport news' | 'chat';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject: WebSocketSubject<SubjectData> = webSocket({
    url: environment.WS_URL,
    protocol: <string>localStorage.getItem('token')
  });

  constructor() {}

  reconnect() {
    this.subject.pipe(
      retry({
        delay: 1000
      })
    );
    /*  .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });*/
  }

  sendMessage(message: string) {
    this.subject.subscribe();
    this.subject.next({
      event: 'hello',
      payload: {
        content: message
      }
    });
  }

  /**
   * @description
   * @param event Custom event type (new answer, message, etc.)
   * @returns {Observable<SocketData>} Return an observable that emits the event
   */
  on(event: eventType): Observable<SocketData> {
    return new Observable((subscriber) => {
      this.subject
        .pipe(
          retry({
            delay: 1000
          })
        )
        .subscribe((data) => event === data.event && subscriber.next(data));
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
