import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const { q } = route.queryParams;
    return of(q);
  }
}
