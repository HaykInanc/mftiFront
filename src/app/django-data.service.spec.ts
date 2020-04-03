import { TestBed } from '@angular/core/testing';

import { DjangoDataService } from './django-data.service';

describe('DjangoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjangoDataService = TestBed.get(DjangoDataService);
    expect(service).toBeTruthy();
  });
});
