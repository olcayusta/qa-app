import { Question } from './question.model';

export interface Tag {
  id: number;
  title: string;
  description: string;
  logo: string;
  creationTime: Date;
  questionCount: number;
  questions: Question[];
  selected?: boolean;
}
