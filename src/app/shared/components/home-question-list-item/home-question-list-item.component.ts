import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Tag } from '@shared/models/tag.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';

@Component({
  selector: 'app-home-question-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MatChipsModule, MatDividerModule, ImgShadowComponent, RelativeTimeFormatPipe],
  templateUrl: './home-question-list-item.component.html',
  styleUrls: ['./home-question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeQuestionListItemComponent implements OnInit {
  @Input() question!: Question;

  ngOnInit(): void {
    const tags: Tag[] = JSON.parse(localStorage.getItem('watchedTags') as string);
    if (tags) {
      this.question?.tags?.forEach((tag) => {
        tags.forEach((watchedTag) => {
          if (tag.id === watchedTag.id) tag.selected = true;
        });
      });
    }
  }
}
