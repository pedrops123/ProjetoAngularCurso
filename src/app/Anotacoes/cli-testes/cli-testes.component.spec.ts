import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliTestesComponent } from './cli-testes.component';

describe('CliTestesComponent', () => {
  let component: CliTestesComponent;
  let fixture: ComponentFixture<CliTestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliTestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliTestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
