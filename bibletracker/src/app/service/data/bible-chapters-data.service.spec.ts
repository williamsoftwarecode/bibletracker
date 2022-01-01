import { TestBed } from '@angular/core/testing';

import { BibleChaptersDataService } from './bible-chapters-data.service';

describe('BibleDataService', () => {
  let service: BibleChaptersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleChaptersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
