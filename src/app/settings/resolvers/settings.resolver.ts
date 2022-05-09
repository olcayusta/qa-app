import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { SettingsService } from '../services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<User> {
  constructor(private settingsService: SettingsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.settingsService.getAccountSettings();
  }
}
