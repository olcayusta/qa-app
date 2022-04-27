import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatButtonModule, SharedModule, UserListComponent, UserListItemComponent]
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
