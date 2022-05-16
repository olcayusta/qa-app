import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';
import { FavoriteService } from './favorite.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class FavoritesComponent implements OnInit {
  questions$!: Observable<Question[]>;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.questions$ = this.favoriteService.getFavoriteQuestions();
  }
}
