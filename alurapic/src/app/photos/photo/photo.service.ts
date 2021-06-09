import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo, Photos } from './photo';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  listFromUser(userName: string): Observable<Photos> {
    return this.httpClient.get<Photos>(`${API_URL}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number): Observable<Photos> {
    const params = new HttpParams().append('page', page.toString());

    return this.httpClient.get<Photos>(`${API_URL}/${userName}/photos`, {
      params,
    });
  }

  upload(
    description: string,
    allowComments: boolean,
    file: File
  ): Observable<Object> {
    const formData = new FormData();

    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.httpClient.post(`${API_URL}/photos/upload`, formData);
  }

  findById(id: string): Observable<Photo> {
    return this.httpClient.get<Photo>(`${API_URL}/photos/${id}`);
  }
}
