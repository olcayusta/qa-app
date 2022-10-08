import { inject, Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient);

  createUser(email: string, password: string, displayName: string, picture: string): Observable<User> {
    return this.http.post<User>(`${environment.API_URL}/users`, {
      email,
      password,
      displayName,
      picture
    });
  }
}
