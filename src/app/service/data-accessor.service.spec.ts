import { TestBed } from '@angular/core/testing';

import { DataAccessorService } from './data-accessor.service';

describe('DataAccessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAccessorService = TestBed.get(DataAccessorService);
    expect(service).toBeTruthy();
  });
});
