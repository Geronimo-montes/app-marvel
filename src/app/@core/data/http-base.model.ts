import { HttpParams } from '@angular/common/http';
import { FiltersParams } from '../models/marvel.model';
import { environment } from '../../../environments/environment';

export abstract class HttpServiceBase {
  private baseURL: string = environment.apiUrl;

  /**
   * Constructs the full URL for a given path based on the base URL.
   * @param {string} path - The API endpoint path.
   * @returns {string} The full URL.
   */
  protected getURL(path: string): string {
    return `${this.baseURL}/${path}`;
  }

  /**
   * Generates an HttpParams object and sets its values based on the provided filters.
   * @param {FiltersParams} dataContainer - The filters to apply to the query parameters.
   * @returns {HttpParams} The generated HttpParams object with the applied filters.
   */
  protected setParamsQrySummary(dataContainer: FiltersParams): HttpParams {
    let params = new HttpParams();

    if (!!dataContainer.name) params = params.set('name', dataContainer.name);
    if (!!dataContainer.nameStartsWith)
      params = params.set('nameStartsWith', dataContainer.nameStartsWith);
    if (!!dataContainer.orderBy)
      params = params.set('orderBy', dataContainer.orderBy.join(','));
    if (!!dataContainer.limit)
      params = params.set('limit', dataContainer.limit.toString());
    if (!!dataContainer.offset)
      params = params.set('offset', dataContainer.offset.toString());

    return params;
  }
}
