import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '@models/user.model';

export const userTitleResolverFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> => {
  const { user } = route.parent?.data as { user: User };
  return of(user.displayName);
};
