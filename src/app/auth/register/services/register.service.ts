import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(
    email: string,
    password: string,
    displayName: string,
    picture: string
  ): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      email,
      password,
      displayName,
      picture,
    });
  }
}
