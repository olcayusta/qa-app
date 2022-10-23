import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from '@models/user.model';

export const userResolverFn = (route: ActivatedRouteSnapshot): Observable<User> => {
  const userId = Number(route.paramMap.get('userId'));
  return inject(UserService).getUser(userId);
};

