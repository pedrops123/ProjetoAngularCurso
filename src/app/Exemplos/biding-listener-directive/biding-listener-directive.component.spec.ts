import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingListenerDirectiveComponent } from './biding-listener-directive.component';

describe('BidingListenerDirectiveComponent', () => {
  let component: BidingListenerDirectiveComponent;
  let fixture: ComponentFixture<BidingListenerDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidingListenerDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidingListenerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
