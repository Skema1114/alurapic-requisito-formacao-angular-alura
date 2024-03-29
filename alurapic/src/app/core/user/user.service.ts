import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import JwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  private userName!: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = JwtDecode(token) as User;
    this.userName = user.name ?? '';
    this.userSubject.next(user);
  }

  hasLogin(): boolean {
    return this.tokenService.hasToken();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({});
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }
}
