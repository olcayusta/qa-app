export interface User {
  readonly id: number;
  readonly displayName: string;
  readonly picture: string;
  readonly email: string;
  readonly password: string;
  readonly signupDate: Date;
  lastSeenTime: Date;
  readonly token?: string;
  readonly githubUrl: string;
  readonly twitterUrl: string;
  readonly isVerified: boolean;
}
