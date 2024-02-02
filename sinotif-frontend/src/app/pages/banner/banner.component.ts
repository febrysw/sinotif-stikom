import { Component, OnInit } from '@angular/core';
import {
  IBannerStatus,
  TodoCardComponent,
} from '../../shared/components/todo-card/todo-card.component';
import { BannerService } from '../../core/services/banner.service';
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
  selector: 'app-banner',
  standalone: true,
  imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  bannerForm!: FormGroup;
  banners: ITodo[] = [];
  todoStatus = IBannerStatus;
  isSlidePanelOpen = false;
  bannerId: string | null = null;
  filterByStatus = '';
  constructor(private bannerService: BannerService, private fb: FormBuilder) {
    this.bannerForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      urut: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('Published', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllBanners();
  }

  getAllBanners() {
    this.bannerService.getAllBanner(this.filterByStatus).subscribe({
      next: (response) => {
        this.banners = response.data;
      },
      error: (error) => {
        this.banners = [];
        console.error('Error fetching banners:', error);
        // Handle the error as needed
      },
    });
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
    this.bannerForm.reset();
    this.bannerId = null;
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllBanners();
  }

  onSubmit() {
    if (this.bannerForm.valid) {
      if (this.bannerId) {
        this.bannerService
          .updateBanner(this.bannerId, this.bannerForm.value)
          .subscribe({
            next: (response) => {
              this.getAllBanners();
              this.onCloseSlidePanel();
            },
          });
      } else {
        this.bannerService.addBanner(this.bannerForm.value).subscribe({
          next: (response) => {
            this.getAllBanners();
            this.onCloseSlidePanel();
          },
        });
      }
    } else {
      this.bannerForm.markAllAsTouched();
    }
  }

  onLoadBannerForm(item: ITodo) {
    this.bannerId = item.id!!;
    this.bannerForm.patchValue({
      urut: item.urut,
      title: item.title,
      image: item.image,
      status: item.status,
    });
    this.openSlidePanel();
  }

  onDeleteBanner() {
    console.log('delete');
    if (this.bannerId) {
      this.bannerService.deleteBanner(this.bannerId).subscribe({
        next: (response) => {
          this.getAllBanners();
          this.onCloseSlidePanel();
        },
      });
    }
  }
}
