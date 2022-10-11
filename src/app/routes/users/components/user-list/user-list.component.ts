import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@shared/models/user.model';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserListItemComponent, NgForOf],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users!: User[];

  data = inject(ActivatedRoute).snapshot.data['users'];

  ngOnInit(): void {
    this.users = this.data;
  }
}
