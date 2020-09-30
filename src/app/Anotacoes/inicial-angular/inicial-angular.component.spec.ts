import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialAngularComponent } from './inicial-angular.component';

describe('InicialAngularComponent', () => {
  let component: InicialAngularComponent;
  let fixture: ComponentFixture<InicialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
