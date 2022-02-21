import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Tag } from '@shared/models/tag.model';

@Component({
  selector: 'qa-home-question-list-item',
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
