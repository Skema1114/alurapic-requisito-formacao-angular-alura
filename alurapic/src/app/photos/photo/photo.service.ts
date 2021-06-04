import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photo';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  listFromUser(username: string): Observable<Photos> {
    return this.httpClient.get<Photos>(`${API}/flavio/photos`);
  }
}
