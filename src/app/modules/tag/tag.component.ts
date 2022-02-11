import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
  tag$!: Observable<Tag>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tag$ = this.route.data.pipe(
      map((data) => {
        return (<{ tag: Tag }>data).tag;
      })
    );
  }
}
