import { TestBed } from '@angular/core/testing';

import { SwipeableDivService } from './swipeable-div.service';

describe('SwipeableDivService', () => {
  let service: SwipeableDivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwipeableDivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
