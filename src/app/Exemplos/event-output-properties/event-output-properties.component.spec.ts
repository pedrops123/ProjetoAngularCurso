import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOutputPropertiesComponent } from './event-output-properties.component';

describe('EventOutputPropertiesComponent', () => {
  let component: EventOutputPropertiesComponent;
  let fixture: ComponentFixture<EventOutputPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOutputPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOutputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
