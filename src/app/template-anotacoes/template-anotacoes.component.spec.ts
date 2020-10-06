import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAnotacoesComponent } from './template-anotacoes.component';

describe('TemplateAnotacoesComponent', () => {
  let component: TemplateAnotacoesComponent;
  let fixture: ComponentFixture<TemplateAnotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAnotacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAnotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
