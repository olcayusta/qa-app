import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.activatedRoute.snapshot.data['users'];
  }
}
