import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '@shared/models/tag.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  API_URL = `${environment.apiUrl}/tags`;

  constructor(private http: HttpClient) {}

  /**
   * Get all tags
   */
  getAllTags() {
    return this.http.get<Tag[]>(this.API_URL);
  }
}
