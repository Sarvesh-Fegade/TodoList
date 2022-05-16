import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  storage: string | null;

  todos:Todo[];

  constructor() {
    this.storage = localStorage.getItem("data");
    if(this.storage == null)
      this.todos = [];
    else
      this.todos = JSON.parse(this.storage)
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo) {
    console.log(todo);
    console.log("dleteTodo is triggerd");
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("data", JSON.stringify(this.todos));
  }
  checkTodo(todo: Todo) {
    var index = this.todos.indexOf(todo);
    if(this.todos[index].active == true)
      this.todos[index].active = false;
    else
    this.todos[index].active = true;
  }
}
