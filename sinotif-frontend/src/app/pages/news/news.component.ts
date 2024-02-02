import { Component, OnInit } from '@angular/core';
import {
  INewsStatus,
  NewsCardComponent,
} from '../../shared/components/news-card/news-card.component';
import { INews } from '../../core/models/news.model';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  newsForm!: FormGroup;
  news: INews[] = [];
  todoStatus = INewsStatus;
  isSlidePanelOpen = false;
  newsId: string | null = null;
  filterByStatus = '';
  constructor(private newsService: NewsService, private fb: FormBuilder) {
    this.newsForm = this.fb.group({
      date: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      slug: new FormControl('', [Validators.required]),
      status: new FormControl('Published', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsService.getAllNews(this.filterByStatus).subscribe({
      next: (response) => {
        this.news = response.data;
      },
      error: (error) => {
        this.news = [];
        console.error('Error fetching news:', error);
        // Handle the error as needed
      },
    });
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
    this.newsForm.reset();
    this.newsId = null;
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllNews();
  }

  onSubmit() {
    if (this.newsForm.valid) {
      if (this.newsId) {
        this.newsService
          .updateNews(this.newsId, this.newsForm.value)
          .subscribe({
            next: (response) => {
              this.getAllNews();
              this.onCloseSlidePanel();
            },
          });
      } else {
        this.newsService.addNews(this.newsForm.value).subscribe({
          next: (response) => {
            this.getAllNews();
            this.onCloseSlidePanel();
          },
        });
      }
    } else {
      this.newsForm.markAllAsTouched();
    }
  }

  onLoadNewsForm(item: INews) {
    this.newsId = item.id!!;
    this.newsForm.patchValue({
      date: item.date,
      title: item.title,
      body: item.body,
      image: item.image,
      slug: item.slug,
      status: item.status,
    });
    this.openSlidePanel();
  }

  onDeleteNews() {
    console.log('delete');
    if (this.newsId) {
      this.newsService.deleteNews(this.newsId).subscribe({
        next: (response) => {
          this.getAllNews();
          this.onCloseSlidePanel();
        },
      });
    }
  }
}
