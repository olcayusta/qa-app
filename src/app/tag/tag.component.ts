import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, SharedModule, MatDividerModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  tag$!: Observable<Tag>;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.tag$ = this.route.data.pipe(map(({ tag }) => tag));
  }
}
