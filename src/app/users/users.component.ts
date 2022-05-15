import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, UserListComponent, MaterialModule, SharedModule]
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
