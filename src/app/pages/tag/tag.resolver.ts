import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TagService } from './tag.service';
import { Tag } from '@models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagResolver implements Resolve<Tag> {
  private tagService = inject(TagService);

  resolve(route: ActivatedRouteSnapshot): Observable<Tag> {
    return this.tagService.getTag(route.paramMap.get('tagId'));
  }
}
