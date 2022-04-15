import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  NavigationError
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Tag } from '@shared/models/tag.model';
import { catchError } from 'rxjs/operators';
import { TagsService } from '../services/tags.service';

@Injectable({
  providedIn: 'root'
})
export class TagsResolver implements Resolve<Tag[]> {
  constructor(private tagsService: TagsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]> {
    return this.tagsService.getAllTags().pipe(
      catchError((err: NavigationError, caught) => {
        return EMPTY;
      })
    );
  }
}
