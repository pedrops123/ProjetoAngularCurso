import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaAtrComponent } from './diretiva-atr.component';

describe('DiretivaAtrComponent', () => {
  let component: DiretivaAtrComponent;
  let fixture: ComponentFixture<DiretivaAtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaAtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaAtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
