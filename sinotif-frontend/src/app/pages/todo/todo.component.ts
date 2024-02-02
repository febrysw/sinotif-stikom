import { Component, OnInit } from '@angular/core';
import {
  ITodoStatus,
  TodoCardComponent,
} from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.model';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todos: ITodo[] = [];
  todoStatus = ITodoStatus;
  isSlidePanelOpen = false;
  todoId: string | null = null;
  filterByStatus = '';

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      date: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      body: new FormControl('', [Validators.required]),
      status: new FormControl('Published', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodo(this.filterByStatus).subscribe({
      next: (response) => {
        this.todos = response.data;
      },
      error: (error) => {
        this.todos = [];
        console.error('Error fetching todos:', error);
        // Handle the error as needed
      },
    });
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
    this.todoForm.reset();
    this.todoId = null;
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllTodos();
  }

  onSubmit() {
    if (this.todoForm.valid) {
      if (this.todoId) {
        this.todoService
          .updateTodo(this.todoId, this.todoForm.value)
          .subscribe({
            next: (response) => {
              this.getAllTodos();
              this.onCloseSlidePanel();
            },
          });
      } else {
        this.todoService.addTodo(this.todoForm.value).subscribe({
          next: (response) => {
            this.getAllTodos();
            this.onCloseSlidePanel();
          },
        });
      }
    } else {
      this.todoForm.markAllAsTouched();
    }
  }

  onLoadTodoForm(item: ITodo) {
    this.todoId = item.id!!;

    console.log(this.todoId);
    this.todoForm.patchValue({
      date: item.date,
      title: item.title,
      body: item.body,
      image: item.image,
      status: item.status,
    });
    this.openSlidePanel();
  }

  onDeleteTodo() {
    console.log('delete');
    if (this.todoId) {
      this.todoService.deleteTodo(this.todoId).subscribe({
        next: (response) => {
          this.getAllTodos();
          this.onCloseSlidePanel();
        },
      });
    }
  }
}
