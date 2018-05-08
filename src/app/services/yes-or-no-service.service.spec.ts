import { TestBed, inject } from '@angular/core/testing';

import { YesOrNoServiceService } from './yes-or-no-service.service';

describe('YesOrNoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YesOrNoServiceService]
    });
  });

  it('should be created', inject([YesOrNoServiceService], (service: YesOrNoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
