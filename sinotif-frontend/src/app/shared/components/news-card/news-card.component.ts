import { Component, Input } from '@angular/core';
import { INews } from '../../../core/models/news.model';
import { DatePipe } from '@angular/common';

export type INewsType = 'Published' | 'Archived';
export const INewsStatus = ['Published', 'Archived'];

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() type: INewsType = 'Published';
  @Input() news!: INews;
}
