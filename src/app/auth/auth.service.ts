import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  private userSubject: BehaviorSubject<User>;
  user$: Observable<User>;

  // store the URL so we can redirect after logging in
  redirectUrl = '/';

  constructor(private http: HttpClient) {
    const user = this.getToken('user') as User;
    const loggedIn = !!user;

    this.userSubject = new BehaviorSubject<User>(user);
    this.user$ = this.userSubject.asObservable();

    this.isLoggedInSubject.next(loggedIn);
    this.userSubject.next(user);
  }

  get userValue(): User {
    return this.userSubject.value;
  }

  getToken(key: string) {
    return JSON.parse(<string>localStorage.getItem(key));
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/users/login`, {
        email,
        password
      })
      .pipe(
        tap((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', user.token!);
          this.userSubject.next(user);
          this.isLoggedInSubject.next(true);
        })
      );
  }

  /*  /!**
   * Kullanicinin bilgilerini localStorage veritabanina kaydediyoruz.
   * Kullanicinin login bilgisini bildiriyoruz.
   * Sayfa yenilendikce, verilerimiz kaybolmayacak.
   * @param user
   * @param token
   *!/
   */

  logout() {
    this.removeUserFromLocalStorage();
    this.isLoggedInSubject.next(false);
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem('token');
  }
}
