import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacoesComponent } from './interpolacoes.component';

describe('InterpolacoesComponent', () => {
  let component: InterpolacoesComponent;
  let fixture: ComponentFixture<InterpolacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
