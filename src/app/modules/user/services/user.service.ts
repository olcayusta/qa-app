import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { environment } from '@environments/environment';
import { Question } from '@shared/models/question.model';
import { Answer } from '@shared/models/answer.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  getUser(userId: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
    // .pipe(catchError(this.handleError));
  }

  getUserQuestions(userId: number) {
    return this.http.get<Question[]>(`${environment.apiUrl}/users/${userId}/questions`);
  }

  getUserAnswers(userId: number) {
    return this.http.get<Answer[]>(`${environment.apiUrl}/users/${userId}/answers`);
  }
}
