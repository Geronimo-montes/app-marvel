import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CharacterModel,
  CharacterNameRealtedObj,
  ResponseApiMarvel,
} from '../data/character.model';
import { Character } from '../models/character';
import { FiltersParams } from '../models/marvel.model';
import { NotificationService } from './notification.service';

@Injectable()
export class CharactersMarvelApiService extends CharacterModel {
  protected path = 'characters';

  constructor(
    protected readonly http: HttpClient,
    // `private notificationService: NotificationService`
    private notificationService: NotificationService
  ) {
    super();
  }

  /**
   * Retrieves a list of characters based on provided filters.
   * @param {FiltersParams} filters - The filters to apply to the request.
   * @returns {Observable<ResponseApiMarvel>} An observable containing the response from the API.
   */
  public getCharacters$(filters: FiltersParams): Observable<ResponseApiMarvel> {
    const url: string = this.getURL(this.path);
    const params = this.setParamsQrySummary(filters);

    return this.http
      .get<any>(url, { params })
      .pipe(catchError(this.handleError));
  }

  /**
   * Retrieves a character by its ID.
   * @param {number} id - The ID of the character to retrieve.
   * @returns {Observable<Character>} An observable containing the character data.
   */
  public getById$(id: number): Observable<Character> {
    return this.http
      .get<any>(`${this.getURL(this.path)}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Retrieves related objects for a character by its ID.
   * @param {ParamCharacterGetObj} param - The parameters for the request, including character ID, object type, and filters.
   * @returns {Observable<ListObjet>} An observable containing the list of related objects.
   * @example
   * // Example usage
   * const param = {
   *   idCharacter: 1011334,
   *   nameRelObj: 'comics',
   *   filters: {}
   * };
   * getCharacterObjById$(param).subscribe(response => {
   *   console.log(response);
   * });
   */
  public getCharacterObjById$(
    idCharacter: number,
    nameRelObj: CharacterNameRealtedObj,
    filters?: FiltersParams
  ): Observable<ResponseApiMarvel> {
    const url: string = `${this.getURL(
      this.path
    )}/${idCharacter}/${nameRelObj}`;
    const params = this.setParamsQrySummary(filters || {});

    return this.http
      .get<any>(url, { params })
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles HTTP errors.
   * @param {any} error - The error response.
   * @returns {Observable<never>} An observable throwing the error.
   */
  private handleError(error: any) {
    console.log({ error });
    return throwError(error);
  }
}
``