import { ITodoType } from '../../shared/components/todo-card/todo-card.component';

export interface IResponse<T> {
  data: T;
  message?: string;
}

export interface ITodo {
  id?: string;
  date: string;
  title: string;
  urut?: string;
  body: string;
  image: string;
  status: ITodoType;
  created_at?: string;
  updated_at?: string;
}
