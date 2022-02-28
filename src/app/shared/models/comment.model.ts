import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  creationTime: Date;
  userId: number;
  user: User;
}
