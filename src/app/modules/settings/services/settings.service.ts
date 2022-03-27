import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  getAccountSettings() {
    return this.http.get<User>(`${environment.apiUrl}/me`);
  }
}
