import { TestBed } from '@angular/core/testing';

import { EleService } from './ele-service.service';

describe('EleService', () => {
  let service: EleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
