import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaInicialComponentComponent } from './estrutura-inicial-component.component';

describe('EstruturaInicialComponentComponent', () => {
  let component: EstruturaInicialComponentComponent;
  let fixture: ComponentFixture<EstruturaInicialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaInicialComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaInicialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
