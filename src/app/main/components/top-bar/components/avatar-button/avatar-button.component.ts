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
   * Toggles the popup.
   */
  async togglePopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadUserProfilePopupComponent();
      this.popupOpened = true;
    }
  }

  /**
   * Loads the user profile popup component.
   */
  async loadUserProfilePopupComponent(): Promise<void> {
    const { UserProfilePopupComponent: comp } = await import(
      '@shared/components/user-profile-popup/user-profile-popup.component'
    );

    this.componentOutlet = comp;
    // Mark the component as dirty to trigger change detection.
    markDirty(this);
  }

  /**
   * Closes the popup if outside the popup is clicked.
   * @param e
   */
  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}
