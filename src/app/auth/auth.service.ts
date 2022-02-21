import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { User } from '@shared/models/user.model';
import { catchError, tap } from 'rxjs/operators';

interface Account {
  email: string;
  displayName: string;
  picture: string;
}

interface ILogin {
  user: User;
  token: string;
  message: string;
  error?: any;
}

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

  /*
   * handleError function
   * */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
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
    localStorage.clear();
    this.isLoggedInSubject.next(false);
  }
}
