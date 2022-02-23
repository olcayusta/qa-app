import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { tap } from 'rxjs/operators';
import { ILogin } from '@auth/interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  // @ts-ignore
  userSubject = new BehaviorSubject<User>(null);

  // store the URL so we can redirect after logging in
  redirectUrl = '/';

  constructor(private http: HttpClient) {
    const userObject = JSON.parse(localStorage.getItem('user') as string);
    const loggedIn = !!userObject;

    this.isLoggedInSubject.next(loggedIn);
    this.userSubject.next(userObject);
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<ILogin> {
    return this.http
      .post<ILogin>(`${environment.apiUrl}/users/login`, {
        email,
        password
      })
      .pipe(
        tap(({ user, token }: ILogin) => {
          if (token) {
            this.saveUserToLocalStorage(user, token);
          }
        })
      );
  }

  /**
   * Kullanicinin bilgilerini localStorage veritabanina kaydediyoruz.
   * Kullanicinin login bilgisini bildiriyoruz.
   * Sayfa yenilendikce, verilerimiz kaybolmayacak.
   * @param user
   * @param token
   */
  private saveUserToLocalStorage(user: User, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.isLoggedInSubject.next(true);
    this.userSubject.next(user);
  }

  /**
   * LocalStorage'den kullanici verilerini sil ve aktif state'i null hale getir.
   */
  logout(): void {
    this.isLoggedInSubject.next(false);
    localStorage.clear();
  }
}
