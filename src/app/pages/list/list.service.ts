import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Question } from '@models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) {
  }

  getMyQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/me/list`);
  }
}
