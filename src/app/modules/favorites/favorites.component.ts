import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FavoriteService } from '@modules/favorites/services/favorite.service';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.questions$ = this.favoriteService.getFavoriteQuestions();
  }
}
