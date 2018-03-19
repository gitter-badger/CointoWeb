import { ErrorHandler, Injectable, Injector } from '@angular/core';
import {
  LocationStrategy,
  PathLocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { Router } from '@angular/router';
import { ErrorMessageServiceService } from './errorMessageService.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
    private service: ErrorMessageServiceService
  ) {}

  handleError(error: Error) {
    const router = this.injector.get(Router);
    const location = <Location>this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();
    const url = location.href;
    this.service.stackTrace = error.stack;
    this.service.url = url;
    this.service.message = message;

    router.navigate(['/500']);
  }
}
