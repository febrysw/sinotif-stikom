import { Component, Input } from '@angular/core';
import { ITodo } from '../../../core/models/todo.model';
import { DatePipe } from '@angular/common';

export type ITodoType = 'Published' | 'Featured' | 'Draft' | 'Archived';
export const ITodoStatus = ['Published', 'Featured', 'Draft', 'Archived'];
export const IBannerStatus = ['Published', 'Archived'];

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() type: ITodoType = 'Published';
  @Input() todo!: ITodo;

  constructor() {}
}
