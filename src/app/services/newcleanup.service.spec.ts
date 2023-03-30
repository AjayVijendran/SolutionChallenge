import { TestBed } from '@angular/core/testing';

import { NewcleanupService } from './newcleanup.service';

describe('NewcleanupService', () => {
  let service: NewcleanupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcleanupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
