import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoLateralComponent } from './fundo-lateral.component';

describe('FundoLateralComponent', () => {
  let component: FundoLateralComponent;
  let fixture: ComponentFixture<FundoLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
