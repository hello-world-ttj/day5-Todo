import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }
  getTodoData() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/")
  }
}
