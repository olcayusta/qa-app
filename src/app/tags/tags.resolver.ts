import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from '@shared/models/tag.model';
import { TagsService } from './services/tags.service';

@Injectable({
  providedIn: 'root'
})
export class TagsResolver implements Resolve<Tag[]> {
  private tagsService = inject(TagsService);

  resolve(): Observable<Tag[]> {
    return this.tagsService.getAllTags();
  }
}
