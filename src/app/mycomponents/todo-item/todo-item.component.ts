import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    //console.log(todo);
    console.log("onCLick in triggerd!");
  }
  check(todo: Todo) {
    this.todoCheck.emit(todo);
  }
}
