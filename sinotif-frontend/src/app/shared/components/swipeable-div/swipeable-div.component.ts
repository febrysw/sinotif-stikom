import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-swipeable-div',
  standalone: true,
  imports: [],
  templateUrl: './swipeable-div.component.html',
  styleUrl: './swipeable-div.component.scss',
})
export class SwipeableDivComponent {
  slides = 0;
  constructor() {}

  ngOnInit(): void {}

  onSwipeRight(event: any, data: any) {
    console.log('event right', event);
    this.slides = this.slides + data;

    if (this.slides == 2) {
      this.slides = 0;
    }
  }

  onSwipeLeft(event: any, data: any) {
    console.log('event left', data);
    this.slides = this.slides + data;
    console.log('slides', this.slides);
    if (this.slides == -2) {
      this.slides = 0;
    }
  }
}
