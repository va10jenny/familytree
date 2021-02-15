import { TestBed } from '@angular/core/testing';

import { GedService } from './ged.service';

describe('GedService', () => {
  let service: GedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
