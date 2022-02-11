import { User } from './user.model';

export interface Answer {
  id: number;
  content: string;
  creationTime: Date;
  userId: number;
  questionId: number;
  user: User;
}
