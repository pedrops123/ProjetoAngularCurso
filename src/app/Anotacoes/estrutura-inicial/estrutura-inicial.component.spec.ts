import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaInicialComponent } from './estrutura-inicial.component';

describe('EstruturaInicialComponent', () => {
  let component: EstruturaInicialComponent;
  let fixture: ComponentFixture<EstruturaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
