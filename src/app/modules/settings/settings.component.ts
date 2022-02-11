import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.user$ = this.settingsService.getAccountSettings();
  }
}
