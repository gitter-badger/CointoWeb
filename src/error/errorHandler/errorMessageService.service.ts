import { Injectable } from '@angular/core';
/**
 * This service works as a transfer object for error details between the error handler and
 * the error page component.
 *
 * @export
 * @class ErrorMessageServiceService
 */
@Injectable()
export class ErrorMessageServiceService {
  public stackTrace: string;
  public message: string;
  public url: string;

  constructor() {}
}
