import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Tag } from '@shared/models/tag.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  API_URL = `${environment.API_URL}/tags`;

  private http = inject(HttpClient);

  getTag(tagId: string | null): Observable<Tag> {
    return this.http.get<Tag>(`${this.API_URL}/tags/${tagId}`);
  }

  searchTag(searchTerm: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.API_URL}/search/${searchTerm}`);
  }
}
