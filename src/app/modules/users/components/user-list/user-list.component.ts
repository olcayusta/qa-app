import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = (<{ users: User[] }>this.route.snapshot.data).users;
  }
}
