import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FiltersParams } from '../models/marvel.model';
import { ResponseApiMarvel } from '../data/character.model';
import { HttpServiceBase } from '../data/http-base.model';

// TODO: Genera abstracts definition for model repository.
export abstract class ComicModel extends HttpServiceBase {}

@Injectable()
export class ComicMarvelApiService extends ComicModel {
  private path = 'characters';

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Retrieves a list of comics based on provided filters.
   * @param {FiltersParams} filters - The filters to apply to the request.
   * @returns {Observable<ResponseApiMarvel | any>} An observable containing the response from the API.
   */
  getComics(filters: FiltersParams): Observable<ResponseApiMarvel | any> {
    const url: string = this.getURL(this.path);
    const params = this.setParamsQrySummary(filters);

    return this.http.get(url, { params }).pipe(catchError(this.handleError));
  }

  /**
   * Retrieves a comic by its ID.
   * @param {number} comicId - The ID of the comic to retrieve.
   * @returns {Observable<any>} An observable containing the comic data.
   */
  getComicById(comicId: number): Observable<any> {
    const url: string = this.getURL(this.path);
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  /**
   * Retrieves characters associated with a specific comic by the comic's ID.
   * @param {number} comicId - The ID of the comic.
   * @param {any} params - Additional parameters for the request.
   * @returns {Observable<any>} An observable containing the characters data.
   */
  getCharactersByComic(comicId: number, params: any): Observable<any> {
    const url: string = this.getURL(this.path);
    return this.http.get(url, { params }).pipe(catchError(this.handleError));
  }

  /**
   * Handles HTTP errors.
   * @param {any} error - The error response.
   * @returns {Observable<never>} An observable throwing the error.
   */
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
