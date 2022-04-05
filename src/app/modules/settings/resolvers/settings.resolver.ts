import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from '@modules/settings/services/settings.service';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<User> {
  constructor(private settingsService: SettingsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.settingsService.getAccountSettings();
  }
}
