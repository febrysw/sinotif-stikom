import { INewsType } from '../../shared/components/news-card/news-card.component';

export interface IResponse<T> {
  data: T;
  message?: string;
}

export interface INews {
  id?: string;
  date: string;
  title: string;
  body: string;
  image: string;
  slug: string;
  status: INewsType;
  created_at?: string;
  updated_at?: string;
}
