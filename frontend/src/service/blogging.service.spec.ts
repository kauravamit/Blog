import { TestBed } from '@angular/core/testing';

import { BloggingService } from './blogging.service';

describe('BloggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloggingService = TestBed.get(BloggingService);
    expect(service).toBeTruthy();
  });
});
