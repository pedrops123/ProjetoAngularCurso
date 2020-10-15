import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyCustomDirectiveComponent } from './input-property-custom-directive.component';

describe('InputPropertyCustomDirectiveComponent', () => {
  let component: InputPropertyCustomDirectiveComponent;
  let fixture: ComponentFixture<InputPropertyCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertyCustomDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
