import { TestBed } from '@angular/core/testing';

import { HsnListService } from './hsn-list.service';

describe('HsnListService', () => {
  let service: HsnListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsnListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
