import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../../entities/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3001/api/todo';

  constructor(private http: HttpClient) {}

  getTodoTask(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url);
  }

  addTodoTask(data: any): Observable<ITodo[]> {
    return this.http.post<ITodo[]>(this.url, data);
  }

  deleteTodo(id: Number): Observable<any> {
    return this.http.delete(this.url + `/${id}`);
  }

  updateTodoStatus(id: Number, isCompleted: boolean) {
    return this.http.put(this.url + `/${id}`, { isCompleted });
  }
}
