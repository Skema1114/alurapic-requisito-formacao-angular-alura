import { Injectable, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService implements OnInit {
  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  ngOnInit(): void {}

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouteChange: boolean
  ): void {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

  success(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  clear() {
    this.alertSubject.next();
  }
}
