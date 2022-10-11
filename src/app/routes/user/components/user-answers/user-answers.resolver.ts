import { inject, Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Answer } from '@models/answer.model';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAnswersResolver implements Resolve<Answer[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Answer[]> {
    const userId = Number(route.parent!.parent!.paramMap.get('userId'));
    return this.userService.getUserAnswers(userId);
  }
}
