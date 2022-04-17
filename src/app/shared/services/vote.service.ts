import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  constructor(private http: HttpClient) {}

  upvoteQuestion(questionId: number) {
    return this.http.post(`${environment.apiUrl}/questions/${questionId}/upvote`, {
      questionId
    });
  }
}
