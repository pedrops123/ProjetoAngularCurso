import { TestBed } from '@angular/core/testing';

import { InputPropertiesService } from './input-properties.service';

describe('InputPropertiesService', () => {
  let service: InputPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
