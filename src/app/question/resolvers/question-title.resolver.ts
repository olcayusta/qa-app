import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Question } from '@shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionTitleResolver implements Resolve<string> {

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { question } = route.parent?.data as { question: Question };
    return of(question.title);
  }
}
