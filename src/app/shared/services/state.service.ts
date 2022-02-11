import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  subject = new Subject<boolean>();
  subject$ = this.subject.asObservable();

  constructor() {}

  show(): void {
    this.subject.next(true);
  }

  hide(): void {
    this.subject.next(false);
  }
}
