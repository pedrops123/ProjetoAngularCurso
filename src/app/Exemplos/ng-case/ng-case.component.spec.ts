import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCaseComponent } from './ng-case.component';

describe('NgCaseComponent', () => {
  let component: NgCaseComponent;
  let fixture: ComponentFixture<NgCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
