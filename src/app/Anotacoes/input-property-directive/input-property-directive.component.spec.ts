import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyDirectiveComponent } from './input-property-directive.component';

describe('InputPropertyDirectiveComponent', () => {
  let component: InputPropertyDirectiveComponent;
  let fixture: ComponentFixture<InputPropertyDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertyDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
