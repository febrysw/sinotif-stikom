import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeableDivComponent } from './swipeable-div.component';

describe('SwipeableDivComponent', () => {
  let component: SwipeableDivComponent;
  let fixture: ComponentFixture<SwipeableDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeableDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipeableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
