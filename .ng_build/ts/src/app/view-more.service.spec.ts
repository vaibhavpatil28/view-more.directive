import { TestBed, inject } from '@angular/core/testing';

import { ViewMoreService } from './view-more.service';

describe('ViewMoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewMoreService]
    });
  });

  it('should be created', inject([ViewMoreService], (service: ViewMoreService) => {
    expect(service).toBeTruthy();
  }));
});
