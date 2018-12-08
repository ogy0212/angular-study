import { Component } from '@angular/core';
import { todoList } from './todo-list';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoList = todoList;

  addTodo(todo: Todo): void {
    this.todoList.unshift(todo);
  }

  deleteCompletedList(): void {
    // this.todoList = new Array<Todo>();
    this.todoList = this.todoList.filter(function(element, index, array) {
      return (element.completed === false);
    })
  }
}
