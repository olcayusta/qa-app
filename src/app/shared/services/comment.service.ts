import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getComments(questionId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.API_URL}/questions/${questionId}/comments`);
  }

  getAnswerComments(answerId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.API_URL}/answers/${answerId}/comments`);
  }

  addComment(content: string, questionId: number): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/comments`, {
      content,
      questionId
    });
  }

  addCommentToAnswer(content: string, answerId: number): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/comments/answers`, {
      content,
      answerId
    });
  }
}
