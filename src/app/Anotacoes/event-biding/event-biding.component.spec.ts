import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBidingComponent } from './event-biding.component';

describe('EventBidingComponent', () => {
  let component: EventBidingComponent;
  let fixture: ComponentFixture<EventBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
