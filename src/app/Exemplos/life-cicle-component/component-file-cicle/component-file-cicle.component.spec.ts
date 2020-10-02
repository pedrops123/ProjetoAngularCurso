import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFileCicleComponent } from './component-file-cicle.component';

describe('ComponentFileCicleComponent', () => {
  let component: ComponentFileCicleComponent;
  let fixture: ComponentFixture<ComponentFileCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFileCicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFileCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
