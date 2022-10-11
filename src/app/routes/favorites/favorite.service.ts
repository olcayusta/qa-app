import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '@models/question.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private http = inject(HttpClient);

  addToFavorite(questionId: number): Observable<Question> {
    return this.http.post<Question>(`${environment.apiUrl}/bookmarks`, {
      questionId
    });
  }

  getFavoriteQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/me/bookmarks`);
  }
}
