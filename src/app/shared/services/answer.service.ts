import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Answer } from '@models/answer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  constructor(private http: HttpClient) {
  }

  getAnswers(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${environment.API_URL}/questions/${questionId}/answers`);
  }

  getAnswersBySort(questionId: number, sortBy: string): Observable<Answer[]> {
    const params = new HttpParams().set('sort_by', sortBy);
    return this.http.get<Answer[]>(`${environment.API_URL}/questions/${questionId}/answers`, {
      params
    });
  }

  create(questionId: number, content: string): Observable<Answer> {
    return this.http.post<Answer>(`${environment.API_URL}/answers`, {
      questionId,
      content
    });
  }

  acceptAnswer(answerId: number, questionId: number): Observable<Answer> {
    return this.http.put<Answer>(`${environment.API_URL}/answers/${answerId}/accept`, {
      questionId
    });
  }
}
