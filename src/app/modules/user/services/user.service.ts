import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { environment } from '@environments/environment';
import { Question } from '@shared/models/question.model';
import { Answer } from '@shared/models/answer.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.log(error.error);
    console.log(error.status);
    console.log(error.type);
    console.log(error.message);
    if (error.status === 0) {
      console.error('An error occurding:', error.error);
    } else {
      console.error(`Backend returning code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened, please try again later.'));
  }

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
