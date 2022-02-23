import { User } from '@shared/models/user.model';

export interface ILogin {
  user: User;
  token: string;
  message: string;
  error?: any;
}