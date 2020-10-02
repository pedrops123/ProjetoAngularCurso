import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleComponentComponent } from './life-cicle-component.component';

describe('LifeCicleComponentComponent', () => {
  let component: LifeCicleComponentComponent;
  let fixture: ComponentFixture<LifeCicleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCicleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCicleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
