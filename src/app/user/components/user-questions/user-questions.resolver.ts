import { inject, Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '@models/question.model';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionsResolver implements Resolve<Question[]> {
  private userService = inject(UserService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    const userId = Number(route.parent!.parent!.paramMap.get('userId'));
    return this.userService.getUserQuestions(userId);
  }
}
