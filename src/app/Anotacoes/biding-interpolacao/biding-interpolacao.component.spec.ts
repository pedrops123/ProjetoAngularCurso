import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingInterpolacaoComponent } from './biding-interpolacao.component';

describe('BidingInterpolacaoComponent', () => {
  let component: BidingInterpolacaoComponent;
  let fixture: ComponentFixture<BidingInterpolacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidingInterpolacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidingInterpolacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
