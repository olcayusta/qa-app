import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '@shared/models/user.model';
import { HttpClient, HttpContext } from '@angular/common/http';
import { BYPASS_ERROR } from '../core/interceptors/http-error.interceptor';
import { environment } from '@environments/environment';

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

  private http = inject(HttpClient);

  constructor() {
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
      .post<User>(
        `${environment.apiUrl}/users/login`,
        {
          email,
          password
        },
        {
          context: new HttpContext().set(BYPASS_ERROR, true)
        }
      )
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
    // localStorage.removeItem('token');
    localStorage.clear();
  }
}
