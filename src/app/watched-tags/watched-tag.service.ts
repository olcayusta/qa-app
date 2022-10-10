import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '@shared/models/tag.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchedTagService {
  constructor(private http: HttpClient) {}

  getFavoriteTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/watched-tags`);
  }
}
