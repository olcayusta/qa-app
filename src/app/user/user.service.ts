import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { Question } from '@shared/models/question.model';
import { Answer } from '@shared/models/answer.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/users/${userId}`);
  }

  getUserQuestions(userId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.API_URL}/users/${userId}/questions`);
  }

  getUserAnswers(userId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${environment.API_URL}/users/${userId}/answers`);
  }
}