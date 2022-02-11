import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { TagService } from '../services/tag.service';
import { Tag } from '@shared/models/tag.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagResolver implements Resolve<Tag> {
  constructor(private tagService: TagService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tag> {
    return this.tagService.getTag(route.paramMap.get('tagId')).pipe(
      catchError((err) => {
        this.router.navigateByUrl('404', {
          replaceUrl: true,
          skipLocationChange: true,
        });
        return EMPTY;
      })
    );
  }
}
