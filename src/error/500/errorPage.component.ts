import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ErrorMessageServiceService } from '../errorHandler/errorMessageService.service';
import { Observable } from 'rxjs/Observable';
import { debug } from 'util';

@Component({
  templateUrl: './errorPage.component.html',
  styleUrls: ['./errorPage.component.css']
})
export class ErrorPageComponent implements OnInit {
  message: string;
  page: string;
  stack: string;
  state$: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private service: ErrorMessageServiceService
  ) { }

  ngOnInit() {
    this.message = this.service.message;
    this.stack = this.service.stackTrace;
    this.page = this.service.url;
  }
}
