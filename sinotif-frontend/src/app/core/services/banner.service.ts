import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  getAllBanner(status: string): Observable<IResponse<ITodo[]>> {
    let queryString = '';
    if (status !== '') {
      queryString = `status=${status}`;
    }
    return this.http.get<IResponse<ITodo[]>>(
      `${apiEndpoint.BannerEndpoint.getAllBanner}?${queryString}`
    );
  }

  addBanner(data: ITodo): Observable<IResponse<ITodo>> {
    const newData = {
      urut: data.urut,
      title: data.title,
      image: data.image,
      status: data.status,
    };

    return this.http.post<IResponse<ITodo>>(
      `${apiEndpoint.BannerEndpoint.addBanner}`,
      newData
    );
  }

  updateBanner(id: string, data: ITodo): Observable<IResponse<ITodo>> {
    const updateData = {
      urut: data.urut,
      title: data.title,
      image: data.image,
      status: data.status,
    };

    return this.http.patch<IResponse<ITodo>>(
      `${apiEndpoint.BannerEndpoint.updateBanner}/${id}`,
      updateData
    );
  }

  deleteBanner(id: string): Observable<any> {
    return this.http.delete(`${apiEndpoint.BannerEndpoint.deleteBanner}/${id}`);
  }
}
