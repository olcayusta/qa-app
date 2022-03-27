import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgModule,
  OnInit,
  Type
} from '@angular/core';
import { OverlayModule, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { UserProfilePopupComponent } from '@shared/components/user-profile-popup/user-profile-popup.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'inek-avatar-button',
  templateUrl: './avatar-button.component.html',
  styleUrls: ['./avatar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarButtonComponent implements OnInit {
  user!: User;
  popupOpened = false;

  componentType!: Type<UserProfilePopupComponent>;
  scrollStrategy: ScrollStrategy = this.sso.block();

  constructor(
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef
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
      await this.loadComponent();
      this.popupOpened = true;
      this.cd.markForCheck();
    }
  }

  /**
   * Loads the user profile popup component.
   */
  async loadComponent(): Promise<void> {
    const { UserProfilePopupComponent } = await import(
      '@shared/components/user-profile-popup/user-profile-popup.component'
    );

    this.componentType = UserProfilePopupComponent;
  }

  /**
   * Closes the popup if outside the popup is clicked.
   * @param $event
   */
  closePopupOnOutsideClicked($event: MouseEvent) {
    if (!$event.composedPath().includes(this.elementRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}

@NgModule({
  declarations: [AvatarButtonComponent],
  imports: [CommonModule, SharedModule, OverlayModule]
})
class AvatarButtonmodule {}
