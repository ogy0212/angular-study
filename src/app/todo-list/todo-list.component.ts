import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Todo[];

  constructor() { }

  ngOnInit() {
  }

  checkItem(todo: Todo): void {
    if (todo.completed) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }
  }

}
