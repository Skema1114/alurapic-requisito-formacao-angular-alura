import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Signin } from '../../home/signin/signin';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  authenticate(userName: string, password: string): Observable<Signin> {
    return this.httpClient.post<Signin>(`${API_URL}/user/login`, {
      userName,
      password,
    });
  }
}
