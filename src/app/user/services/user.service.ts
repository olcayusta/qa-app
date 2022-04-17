import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { environment } from '@environments/environment';
import { Question } from '@shared/models/question.model';
import { Answer } from '@shared/models/answer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }

  getUserQuestions(userId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/users/${userId}/questions`);
  }

  getUserAnswers(userId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${environment.apiUrl}/users/${userId}/answers`);
  }
}
