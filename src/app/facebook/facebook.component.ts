import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacebookComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  loginGithub() {
    this.http.get(`${environment.apiUrl}/login/github`).subscribe((value) => {
      console.log(value);
    });
  }

  loginFacebook() {
    this.http.get(`${environment.apiUrl}/login/facebook`).subscribe((value) => {
      console.log(value);
    });
  }
}
