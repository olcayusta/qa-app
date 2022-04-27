import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';
import { UserService } from '../../../services/user.service';

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
