import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBidingComponent } from './class-biding.component';

describe('ClassBidingComponent', () => {
  let component: ClassBidingComponent;
  let fixture: ComponentFixture<ClassBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
