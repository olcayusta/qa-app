import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { Question } from '@models/question.model';
import { Answer } from '@models/answer.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { http } from '@functions';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(userId: number): Observable<User> {
    return http.get<User>(`${environment.API_URL}/users/${userId}`);
  }

  getUserQuestions(userId: number): Observable<Question[]> {
    return http.get<Question[]>(`${environment.API_URL}/users/${userId}/questions`);
  }

  getUserAnswers(userId: number): Observable<Answer[]> {
    return http.get<Answer[]>(`${environment.API_URL}/users/${userId}/answers`);
  }
}
