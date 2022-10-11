import { User } from '@models/user.model';

export interface ILogin {
  user: User;
  token: string;
}
