import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';
import { Store } from '@ngrx/store';
import { AppState, getState } from 'store';
import { Observable } from 'rxjs/Observable';
import { ErrorMessageServiceService } from '../errorHandler/errorMessageService.service';

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
    private store: Store<AppState>,
    private service: ErrorMessageServiceService
  ) {}

  ngOnInit() {
    this.state$ = this.store.select(getState).map(x => x);
    this.message = this.service.message;
    this.stack = this.service.stackTrace;
    this.page = this.service.url;
  }
}
