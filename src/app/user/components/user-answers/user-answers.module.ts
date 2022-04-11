import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAnswersRoutingModule } from './user-answers-routing.module';
import { UserAnswersComponent } from './user-answers.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UserAnswersComponent],
  imports: [CommonModule, UserAnswersRoutingModule, SharedModule]
})
export class UserAnswersModule {}
