import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNomeComponent } from './section-nome.component';

describe('SectionNomeComponent', () => {
  let component: SectionNomeComponent;
  let fixture: ComponentFixture<SectionNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
