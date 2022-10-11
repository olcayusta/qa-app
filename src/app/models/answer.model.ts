import { User } from './user.model';
import { Question } from '@models/question.model';

export interface Answer {
  id: number;
  content: string;
  creationTime: Date;
  accepted?: boolean;
  userId: number;
  questionId: number;
  user: User;
  question: Question;
}
