/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorMessageServiceService } from './errorMessageService.service';

describe('Service: ErrorMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMessageServiceService]
    });
  });

  it(
    'should ...',
    inject(
      [ErrorMessageServiceService],
      (service: ErrorMessageServiceService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
