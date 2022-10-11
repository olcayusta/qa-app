import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Tag } from '@models/tag.model';
import { Observable } from 'rxjs';
import { http } from '@functions';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  API_URL = `${environment.API_URL}/tags`;

  getTag(tagId: string | null): Observable<Tag> {
    return http.get<Tag>(`${this.API_URL}/tags/${tagId}`);
  }

  searchTag(searchTerm: string): Observable<Tag[]> {
    return http.get<Tag[]>(`${this.API_URL}/search/${searchTerm}`);
  }
}
