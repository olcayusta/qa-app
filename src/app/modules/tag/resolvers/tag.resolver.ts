import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TagService } from '../services/tag.service';
import { Tag } from '@shared/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagResolver implements Resolve<Tag> {
  constructor(private tagService: TagService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Tag> {
    return this.tagService.getTag(route.paramMap.get('tagId'));
  }
}
