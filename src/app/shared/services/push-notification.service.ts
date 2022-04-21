import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  SERVER_URL = 'http://localhost:9001/add-subscription';

  constructor(private http: HttpClient) {}

  sendSubscriptionToTheServer(subscription: PushSubscription): Observable<any> {
    return this.http.post(this.SERVER_URL, subscription);
  }

  sendUnsubscriptionToTheServer(subscription: PushSubscription): Observable<any> {
    return this.http.post(`${environment.apiUrl}/remove-subscription`, {
      endpoint: subscription.endpoint
    });
  }
}
