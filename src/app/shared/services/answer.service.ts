import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(private http: HttpClient) {}

  getAnswers(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(
      `${environment.apiUrl}/questions/${questionId}/answers`
    );
  }

  create(questionId: number, content: string): Observable<Answer> {
    return this.http.post<Answer>(`${environment.apiUrl}/answers`, {
      questionId,
      content,
    });
  }
}
