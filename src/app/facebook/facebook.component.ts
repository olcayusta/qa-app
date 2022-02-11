import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacebookComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.http.get(`${environment.apiUrl}/login/github`).subscribe((value) => {
      console.log(value);
    });

    //window.open('http://localhost:9001/login/facebook')
  }
}
