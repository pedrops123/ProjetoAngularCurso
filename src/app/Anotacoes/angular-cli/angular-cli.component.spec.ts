import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCLIComponent } from './angular-cli.component';

describe('AngularCLIComponent', () => {
  let component: AngularCLIComponent;
  let fixture: ComponentFixture<AngularCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCLIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
