import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Type,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';
import { AuthService } from '../../../../../auth/auth.service';
import { IronDropdownComponent } from '../../../../../experimental/iron-dropdown/iron-dropdown.component';

@Component({
  selector: 'qa-avatar-button',
  templateUrl: './avatar-button.component.html',
  styleUrls: ['./avatar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarButtonComponent implements OnInit, AfterViewInit {
  user!: User;

  blockScrollStrategy: ScrollStrategy = this.sso.block();
  popupOpened = false;

  // compRef?: Type<any>;

  ironDropdownOutlet?: Type<IronDropdownComponent>;

  constructor(
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  ngAfterViewInit() {}

  async openPopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadIronDropdownComponent();
      this.popupOpened = true;
    }
  }

  async loadIronDropdownComponent(): Promise<void> {
    const { IronDropdownComponent: comp } = await import(
      '../../../../../experimental/iron-dropdown/iron-dropdown.component'
    );

    this.ironDropdownOutlet = comp;
    markDirty(this);
  }

  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elRef.nativeElement)) {
      this.blockScrollStrategy = this.sso.noop();
      this.popupOpened = false;
    }
  }

  onDetach() {
    this.popupOpened = false;
  }
}
