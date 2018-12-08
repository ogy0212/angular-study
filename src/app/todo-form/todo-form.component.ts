import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string;
  expiredDate: string;

  @Output() submit = new EventEmitter<Todo>();
  @Output() deleteCompletedList = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  create(): void {
    if ( this.title ) {
      const todo: Todo = { title: this.title, completed: false, expiredDate: new Date('12 Dec 2099 00:00:00 GMT')};
      if ( this.expiredDate ) {
        //TODO string -> dateを解釈する
        var day = moment(this.expiredDate, "MM/DD/YYYY");
        todo.expiredDate = day.toDate();
      }
      this.submit.emit(todo);
      this.title = '';
      this.expiredDate = '';
    }
  }

  deleteCompleted(): void {
    this.deleteCompletedList.emit();
  }
}
