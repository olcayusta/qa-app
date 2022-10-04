import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, SharedModule, MatDividerModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  tag$!: Observable<Tag>;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.tag$ = this.route.data.pipe(map(({ tag }) => tag));
  }
}
