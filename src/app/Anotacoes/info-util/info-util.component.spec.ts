import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUtilComponent } from './info-util.component';

describe('InfoUtilComponent', () => {
  let component: InfoUtilComponent;
  let fixture: ComponentFixture<InfoUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
