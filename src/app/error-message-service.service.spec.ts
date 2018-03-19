import { TestBed, inject } from '@angular/core/testing';

import { ErrorMessageServiceService } from './error-message-service.service';

describe('ErrorMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMessageServiceService]
    });
  });

  it('should be created', inject([ErrorMessageServiceService], (service: ErrorMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
