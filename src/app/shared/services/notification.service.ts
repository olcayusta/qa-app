import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notification } from '../models/notification.model';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

interface UnSeenNotification {
  unseenCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${environment.apiUrl}/notifications`);
  }

  getUnseenCount(): Observable<UnSeenNotification> {
    return this.http.get<UnSeenNotification>(`${environment.apiUrl}/notifications/unseen-count`);
  }
}
