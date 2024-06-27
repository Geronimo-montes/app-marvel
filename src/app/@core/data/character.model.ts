import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { Comic } from '../models/comic';
import { Series } from '../models/series';
import { Story } from '../models/story';
import { HttpServiceBase } from './http-base.model';
import { HttpStatusCode } from '@angular/common/http';
import { FiltersParams } from '../models/marvel.model';

enum CharacterEndPoints {
  'comics',
  'events',
  'series',
  'stories',
}
export type CharacterNameRealtedObj = keyof typeof CharacterEndPoints;

/**
 * Parameters for getting related objects for a character.
 */
export interface ParamCharacterGetObj {
  /** The ID of the character. */
  idCharacter: number;
  /** The name of the related object type (e.g., 'comics', 'events'). */
  nameRelObj: CharacterNameRealtedObj;
  /** Filters to apply to the query. */
  filters: FiltersParams;
}

/**
 * Response from the Marvel API.
 */
export interface ResponseApiMarvel {
  /** HTTP status code of the response. */
  code: HttpStatusCode;
  /** Status message of the response. */
  status: string;
  /** Copyright information. */
  copyright: string;
  /** Attribution text for the response. */
  attributionText: string;
  /** Attribution HTML for the response. */
  attributionHTML: string;
  /** ETag of the response. */
  etag: string;
  /** Data object containing the response data. */
  data: DataResponse;
}

/**
 * Data object within the Marvel API response.
 */
export interface DataResponse {
  /** Offset of the current data set. */
  offset: number;
  /** Limit of the current data set. */
  limit: number;
  /** Total number of results available. */
  total: number;
  /** Count of results in the current data set. */
  count: number;
  /** List of results. */
  results: ListObjet;
}

/** Type representing a list of various Marvel objects. */
export type ListObjet = Array<Character | Comic | Event | Series | Story> | [];

/**
 * Abstract base class for character-related API models.
 */
export abstract class CharacterModel extends HttpServiceBase {
  /**
   * Retrieves a list of characters based on provided filters.
   * @param {FilterParams} filters - The filters to apply to the request.
   * @returns {Observable<ResponseApiMarvel>} An observable containing the response from the API.
   */
  public abstract getCharacters$(
    filters: FiltersParams
  ): Observable<ResponseApiMarvel>;

  /**
   * Retrieves a character by its ID.
   * @param {number} id - The ID of the character to retrieve.
   * @returns {Observable<Character>} An observable containing the character data.
   */
  public abstract getById$(id: number): Observable<Character>;

  /**
   * Retrieves related objects for a character by its ID.
   * @param {ParamCharacterGetObj} params - The parameters for the request, including character ID, object type, and filters.
   * @returns {Observable<ListObjet>} An observable containing the list of related objects.
   */
  public abstract getCharacterObjById$(
    idCharacter: number,
    nameRelObj: CharacterNameRealtedObj,
    filters?: FiltersParams
  ): Observable<ResponseApiMarvel>;
}
