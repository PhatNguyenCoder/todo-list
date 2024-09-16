import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITodo } from '../../entities/todo';
import { TodoService } from '../service/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoValue: string = '';
  todoTask: ITodo[] = [];
  todoForm!: FormGroup;

  constructor(private _todo: TodoService) {}

  ngOnInit(): void {
    this.getTodoTask();
    this.setForm();
  }

  getTodoTask() {
    this._todo.getTodoTask().subscribe(
      (data) => {
        this.todoTask = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setForm() {
    this.todoForm = new FormGroup({
      todoName: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.todoForm.valid) {
      this._todo.addTodoTask(this.todoForm.value).subscribe({
        next: (res: any) => {
          console.log('Add todo list successfully');
          this.todoTask.push(res);
          this.todoForm.reset();
        },
      });
    } else {
      alert('Please enter todo list');
    }
  }

  deleteTodo(id: Number) {
    this._todo.deleteTodo(id).subscribe(
      () => {
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleTodoStatus(index: number, id: Number) {
    this.todoTask[index].isCompleted = !this.todoTask[index].isCompleted;

    this._todo.updateTodoStatus(id, this.todoTask[index].isCompleted).subscribe(
      (res) => {
        console.log('Updated todo status successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toggleTodoStatus1(index: number, id: Number) {
    this.todoTask[index].isCompleted = !this.todoTask[index].isCompleted;

    this._todo
      .updateTodoStatus(id, !this.todoTask[index].isCompleted)
      .subscribe(
        (res) => {
          console.log('Updated todo status successfully');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
