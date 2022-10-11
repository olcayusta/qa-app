import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tag } from '@models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { tag } = route.parent!.data as { tag: Tag };
    return of(tag.title);
  }
}
