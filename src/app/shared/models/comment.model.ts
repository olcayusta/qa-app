import { User } from './user.model';

export interface Comment {
  id: number;
  content: string;
  text: string;
  creationTime: Date;
  userId: number;
  user: User;
}
