import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ListService } from '@shared/services/list.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'id-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.questions$ = this.listService.getMyQuestions().pipe(shareReplay());
  }
}
