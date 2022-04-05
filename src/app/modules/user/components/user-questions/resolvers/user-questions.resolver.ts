import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@modules/user/services/user.service';
import { Question } from '@shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionsResolver implements Resolve<Question[]> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    // const userId = Number(route.paramMap.get('userId'));
    const userId = Number(route.parent!.parent!.paramMap.get('userId'));
    return this.userService.getUserQuestions(userId);
  }
}
