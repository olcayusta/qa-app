import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notification } from '../models/notification.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${environment.apiUrl}/notifications`);
  }

  getUnseenCount(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/unseen_count`);
  }
}
