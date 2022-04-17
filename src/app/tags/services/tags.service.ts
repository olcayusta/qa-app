import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tag } from '@shared/models/tag.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getAllTags() {
    return this.http.get<Tag[]>(`${environment.apiUrl}/tags`);
  }

  getAllTagsBySearchTerm(searchTerm: string) {
    const params = new HttpParams().set('q', searchTerm);
    return this.http.get<Tag[]>(`${environment.apiUrl}/tags`, {
      params
    });
  }
}
