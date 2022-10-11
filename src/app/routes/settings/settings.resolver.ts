import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<User> {
  constructor(private settingsService: SettingsService) {}

  resolve(): Observable<User> {
    return this.settingsService.getAccountSettings();
  }
}
