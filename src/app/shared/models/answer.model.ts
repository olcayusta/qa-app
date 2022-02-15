import { User } from './user.model';

export interface Answer {
  id: number;
  content: string;
  creationTime: Date;
  accepted?: boolean;
  userId: number;
  questionId: number;
  user: User;
}
