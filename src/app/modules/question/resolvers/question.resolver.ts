import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  NavigationError
} from '@angular/router';
import { EMPTY, Observable, tap } from 'rxjs';
import { QuestionService } from '../services/question.service';
import { Question } from '@shared/models/question.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question> {
  constructor(private questionService: QuestionService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> {
    const questionId = Number(route.paramMap.get('questionId'));
    return this.questionService.getQuestion(questionId).pipe(
      catchError((err: NavigationError) => {
        this.router.navigateByUrl('404', {
          replaceUrl: true,
          skipLocationChange: true
        });
        return EMPTY;
      })
    );
  }
}
