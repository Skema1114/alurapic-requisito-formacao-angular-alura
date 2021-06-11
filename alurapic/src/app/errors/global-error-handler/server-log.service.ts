import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ServerLog } from './server-log';

const SERVER_LOG_URL = environment.ServerLogUrl;

@Injectable({
  providedIn: 'root',
})
export class ServerLogService {
  constructor(private httpClient: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.httpClient.post(`${SERVER_LOG_URL}/infra/log`, serverLog);
  }
}
