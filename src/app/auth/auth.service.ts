import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '@shared/models/user.model';
import { tap } from 'rxjs/operators';
import { ILogin } from '@auth/interfaces/ILogin';

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
    const user = JSON.parse(<string>localStorage.getItem('user')) as User;
    const loggedIn = !!user;

    this.userSubject = new BehaviorSubject<User>(user);
    this.user$ = this.userSubject.asObservable();

    this.isLoggedInSubject.next(loggedIn);
    this.userSubject.next(user);
  }

  get userValue(): User {
    return this.userSubject.value;
  }

  /**
   * Login
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<ILogin> {
    return this.http
      .post<ILogin>(`${environment.apiUrl}/users/login`, {
        email,
        password
      })
      .pipe(
        tap(({ user, token }: ILogin) => {
          token && this.saveUserToLocalStorage(user, token);
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

  /**
   * Save user to local storage.
   * @param user
   * @param token
   */
  saveUserToLocalStorage(user: User, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
    this.userSubject.next(user);
  }

  /**
   * Logout
   */
  logout() {
    this.removeUserFromLocalStorage();
    this.isLoggedInSubject.next(false);
  }

  /**
   * Delete user from local storage.
   */
  removeUserFromLocalStorage() {
    localStorage.clear();
  }
}
