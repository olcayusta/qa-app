import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorite(questionId: number): Observable<Question> {
    return this.http.post<Question>(`${environment.apiUrl}/bookmarks`, {
      questionId,
    });
  }

  getFavoriteQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/bookmarks`);
  }
}
