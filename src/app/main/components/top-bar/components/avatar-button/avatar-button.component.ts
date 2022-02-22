import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Type,
  ɵmarkDirty as markDirty
} from '@angular/core';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';

import { UserProfilePopupComponent } from '@shared/components/user-profile-popup/user-profile-popup.component';

@Component({
  selector: 'inek-avatar-button',
  templateUrl: './avatar-button.component.html',
  styleUrls: ['./avatar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarButtonComponent implements OnInit {
  user!: User;
  popupOpened = false;

  componentOutlet?: Type<UserProfilePopupComponent>;
  blockScrollStrategy = this.sso.block();

  constructor(
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  /**
   * Toggle popup
   */
  async togglePopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadIronDropdownComponent();
      this.popupOpened = true;
    }
  }

  async loadIronDropdownComponent(): Promise<void> {
    const { UserProfilePopupComponent: comp } = await import(
      '@shared/components/user-profile-popup/user-profile-popup.component'
    );

    this.componentOutlet = comp;
    markDirty(this);
  }

  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}