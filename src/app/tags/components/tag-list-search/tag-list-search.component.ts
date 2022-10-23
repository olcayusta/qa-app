import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list-search.component.html',
  styleUrls: ['./tag-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListSearchComponent {

}
