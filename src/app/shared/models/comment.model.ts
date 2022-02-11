import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  creationTime: string;
  userId: number;
  user: User;
}
