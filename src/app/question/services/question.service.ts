import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private http = inject(HttpClient);

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/questions`);
  }

  getActiveQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/questions/active`);
  }

  getUnansweredQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(
      `${environment.apiUrl}/questions/unanswered`
    );
  }

  getQuestion(questionId: number): Observable<Question> {
    return this.http.get<Question>(
      `${environment.apiUrl}/questions/${questionId}`
    );
  }

  getMoreQuestions(offset: number = 0): Observable<Question[]> {
    return this.http.get<Question[]>(
      `${environment.apiUrl}/questions/loadmore/${offset}`
    );
  }

  getFeedContent(page: number = 0): Observable<Question[]> {
    const params = new HttpParams()
      .set('per_page', 15)
      .set('page', page)
      .set('sort_by', 'hotness_score')
      .set('sort_direction', 'desc');
    return this.http.get<Question[]>(`${environment.apiUrl}/home`, {
      params
    });
  }

  saveQuestion(
    title: string,
    content: string,
    tags: number[]
  ): Observable<Question> {
    return this.http.post<Question>(`${environment.apiUrl}/questions`, {
      title,
      content,
      tags
    });
  }
}
