import { TestBed } from '@angular/core/testing';

import { AllcardService } from './allcard.service';

describe('AllcardService', () => {
  let service: AllcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
