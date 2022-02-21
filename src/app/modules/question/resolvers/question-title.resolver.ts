import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Question } from '@shared/models/question.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionTitleResolver implements Resolve<string> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { question } = <{ question: Question }>route.parent?.data;
    return of(`${question.title} - ${environment.appTitle}`);
  }
}
