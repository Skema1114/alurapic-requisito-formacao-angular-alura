import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Photo, Photos } from './photo';
import { PhotosComments } from './photo-comment';

const API_URL = environment.ApiUrl;

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

    return this.httpClient.post(`${API_URL}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  findById(photoId: number): Observable<Photo> {
    return this.httpClient.get<Photo>(`${API_URL}/photos/${photoId}`);
  }

  getComments(photoId: number): Observable<PhotosComments> {
    return this.httpClient.get<PhotosComments>(
      `${API_URL}/photos/${photoId}/comments`
    );
  }

  addComments(photoId: number, commentText: string): Observable<Object> {
    return this.httpClient.post(`${API_URL}/photos/${photoId}/comments`, {
      commentText,
    });
  }

  removePhoto(photoId: number): Observable<Object> {
    return this.httpClient.delete(`${API_URL}/photos/${photoId}`);
  }

  like(photoId: number): Observable<boolean> {
    return this.httpClient
      .post(`${API_URL}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map((response) => true))
      .pipe(
        catchError((error) => {
          return error.status == '304' ? of(false) : throwError(error);
        })
      );
  }
}
