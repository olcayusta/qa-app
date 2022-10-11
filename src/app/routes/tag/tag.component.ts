import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Tag } from '@models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {
  HomeQuestionListItemComponent
} from '@components/home-question-list-item/home-question-list-item.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatDividerModule, NgForOf, HomeQuestionListItemComponent],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  tag$!: Observable<Tag>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tag$ = this.activatedRoute.data.pipe(map(({ tag }) => tag));
  }
}
