import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

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

  saveQuestion(
    title: string,
    content: string,
    tags: number[]
  ): Observable<Question> {
    return this.http.post<Question>(`${environment.apiUrl}/questions`, {
      title,
      content,
      tags,
    });
  }
}
