import { User } from './user.model';

export interface Notification {
  id: number;
  senderId: number;
  receiverId: number;
  text: string;
  type: number;
  creationTime: Date;
  isRead: boolean;
  user: User;
}
