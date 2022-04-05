import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Question } from '../models/question.model';
import { Tag } from '@shared/models/tag.model';
import { User } from '@shared/models/user.model';

export interface ISearchResult {
  questions: Question[];
  tags: Tag[];
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchQuestion(searchTerm: string) {
    return this.http.get<ISearchResult>(`${environment.apiUrl}/search`, {
      params: {
        q: searchTerm
      }
    });
  }
}
