import { ErrorHandler, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CovalentJsonFormatterModule } from '@covalent/core';
import { ErrorMessageServiceService } from './errorHandler/errorMessageService.service';
import { ErrorPageComponent } from './500/errorPage.component';
import { GlobalErrorHandler } from './errorHandler/globalErrorHandler';
import { MatExpansionModule } from '@angular/material';
import { NotFoundComponent } from './404/notFound.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CovalentJsonFormatterModule,
    MatExpansionModule
  ],
  declarations: [ErrorPageComponent, NotFoundComponent],
  exports: [ErrorPageComponent, NotFoundComponent],
  providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ErrorMessageServiceService
  ]
})
export class ErrorModule { }
