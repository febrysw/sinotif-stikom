import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, INews } from '../models/news.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews(status: string): Observable<IResponse<INews[]>> {
    let queryString = '';
    if (status !== '') {
      queryString = `status=${status}`;
    }
    return this.http.get<IResponse<INews[]>>(
      `${apiEndpoint.NewsEndpoint.getAllNews}?${queryString}`
    );
  }

  addNews(data: INews): Observable<IResponse<INews>> {
    const newData = {
      date: data.date,
      title: data.title,
      body: data.body,
      image: data.image,
      status: data.status,
      slug: data.slug,
    };

    return this.http.post<IResponse<INews>>(
      `${apiEndpoint.NewsEndpoint.addNews}`,
      newData
    );
  }

  updateNews(id: string, data: INews): Observable<IResponse<INews>> {
    const updateData = {
      date: data.date,
      title: data.title,
      body: data.body,
      image: data.image,
      status: data.status,
      slug: data.slug,
    };

    return this.http.patch<IResponse<INews>>(
      `${apiEndpoint.NewsEndpoint.updateNews}/${id}`,
      updateData
    );
  }

  deleteNews(id: string): Observable<any> {
    return this.http.delete(`${apiEndpoint.NewsEndpoint.deleteNews}/${id}`);
  }
}
