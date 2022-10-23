import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tag } from '@models/tag.model';
import { Observable } from 'rxjs';
import { API_URL } from '@environments';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private http = inject(HttpClient);

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_URL}/tags`);
  }

  getAllTagsBySearchTerm(searchTerm: string) {
    const params = new HttpParams().set('q', searchTerm);
    return this.http.get<Tag[]>(`${API_URL}/tags`, {
      params
    });
  }
}
