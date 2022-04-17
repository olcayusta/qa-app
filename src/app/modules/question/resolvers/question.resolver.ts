import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from '../services/question.service';
import { Question } from '@shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question> {
  constructor(private questionService: QuestionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> {
    const questionId = Number(route.paramMap.get('questionId'));
    return this.questionService.getQuestion(questionId);
  }
}
