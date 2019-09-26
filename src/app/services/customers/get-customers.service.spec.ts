import { TestBed } from '@angular/core/testing';

import { GetCustomersService } from './get-customers.service';

describe('GetCustomersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCustomersService = TestBed.get(GetCustomersService);
    expect(service).toBeTruthy();
  });
});
