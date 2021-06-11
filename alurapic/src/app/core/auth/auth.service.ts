import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(
    userName: string,
    password: string
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<HttpResponse<any>>(
        `${API_URL}/user/login`,
        {
          userName,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token');

          if (authToken) {
            this.userService.setToken(authToken);
          } else {
            console.log('Token nulo');
          }

          console.log(`User ${userName} authenticated with token ${authToken}`);
        })
      );
  }
}
