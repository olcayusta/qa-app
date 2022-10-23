import { inject, Injectable } from '@angular/core';
import { Tag } from '@models/tag.model';
import { Observable } from 'rxjs';
import { API_URL } from '@environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private http = inject(HttpClient);

  getTag(tagId: string | null): Observable<Tag> {
    return this.http.get<Tag>(`${API_URL}/tags/${tagId}`);
  }

  searchTag(searchTerm: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_URL}/search/${searchTerm}`);
  }
}
