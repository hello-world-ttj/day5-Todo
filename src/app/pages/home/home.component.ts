import { Component } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private api: TodoServiceService) { }
  
  todos:any

  ngOnInit() {
    this.api.getTodoData().subscribe(data => {
      this.todos=data
    })
  }


  delete(id: any) {
    this.todos = this.todos.filter((e : {id:any})=> e.id != id)
  }
}
