import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  getAccountSettings() {
    return this.http.get<User>(`${environment.API_URL}/me`);
  }
}
