import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Tag } from '@shared/models/tag.model';

@Component({
  selector: 'qa-home-question-list-item',
  templateUrl: './home-question-list-item.component.html',
  styleUrls: ['./home-question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeQuestionListItemComponent implements OnInit {
  @Input() question!: Question;

  selectedTagIds!: number[];

  ngOnInit(): void {
    const tags = JSON.parse(localStorage.getItem('watchedTags') as string);
    if (tags) {
      this.selectedTagIds = tags.map((value: Tag) => {
        return value.id;
      });
      this.question?.tags?.forEach((tag) => {
        this.selectedTagIds.forEach((selectedTagId) => {
          tag.id === selectedTagId ? (tag.selected = true) : null;
        });
      });
    }
  }
}
