import { Component, Output, EventEmitter, HostListener } from '@angular/core';
// import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
  selector: 'app-swipeable-div',
  standalone: true,
  // template: ` <div class="swipeable-div" (swipe)="onSwipe($event)"></div> `,
  templateUrl: './swipeable-div.component.html',
  styleUrl: './swipeable-div.component.scss',
  // styles: [
  //   `
  //     .swipeable-div {
  //       width: 200px;
  //       height: 200px;
  //       background-color: lightgray;
  //       text-align: center;
  //       line-height: 200px;
  //     }
  //   `,
  // ],
})
export class SwipeableDivService {
  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(event: Event): void {
    this.swipeLeft.emit();
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight(event: Event): void {
    this.swipeRight.emit();
  }

  onSwipe(event: Event): void {
    // You can handle swipe events here if needed
  }
}
