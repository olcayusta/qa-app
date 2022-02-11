import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tag } from '@shared/models/tag.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { tag } = <{ tag: Tag }>route.parent?.data;
    return of(`${tag.title} - ${environment.appTitle}`);
  }
}
