import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private subject = new Subject<boolean>();
  subject$ = this.subject.asObservable();

  constructor() {}

  addSpinner(): void {
    this.subject.next(true);
  }

  removeSpinner(): void {
    this.subject.next(false);
  }
}
