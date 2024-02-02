import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodo(status: string): Observable<IResponse<ITodo[]>> {
    let queryString = '';
    if (status !== '') {
      queryString = `status=${status}`;
    }
    return this.http.get<IResponse<ITodo[]>>(
      `${apiEndpoint.TodoEndpoint.getAllTodo}?${queryString}`
    );
  }

  addTodo(data: ITodo): Observable<IResponse<ITodo>> {
    const newData = {
      data: {},
      notification: {
        title: data.title,
        body: data.body,
        image: data.image,
      },
      date: data.date,
      status: data.status,
    };

    return this.http.post<IResponse<ITodo>>(
      `${apiEndpoint.TodoEndpoint.addTodo}`,
      newData
    );
  }

  updateTodo(id: string, data: ITodo): Observable<IResponse<ITodo>> {
    const updateData = {
      data: {},
      notification: {
        title: data.title,
        body: data.body,
        image: data.image,
      },
      date: data.date,
      status: data.status,
    };

    return this.http.patch<IResponse<ITodo>>(
      `${apiEndpoint.TodoEndpoint.updateTodo}/${id}`,
      updateData
    );
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${apiEndpoint.TodoEndpoint.deleteTodo}/${id}`);
  }
}
