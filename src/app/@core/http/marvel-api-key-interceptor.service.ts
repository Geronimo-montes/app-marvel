import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class MarvelApiKeyInterceptor implements HttpInterceptor {
  private publicApiKey = environment.publicApiKey;
  private privateApiKey = environment.privateApiKey;

  /**
   * Intercepts HTTP requests to add the necessary API key authentication parameters.
   * @param {HttpRequest<any>} req - The outgoing HTTP request.
   * @param {HttpHandler} next - The next handler in the HTTP request chain.
   * @returns {Observable<HttpEvent<any>>} An observable representing the handled request.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const ts = new Date().getTime().toString();
    const hash = this.generateHash(ts);

    const authReq = req.clone({
      params: req.params
        .set('ts', ts)
        .set('apikey', this.publicApiKey)
        .set('hash', hash),
    });

    return next.handle(authReq);
  }

  /**
   * Generates a hash required for the Marvel API request authentication.
   * @param {string} ts - The timestamp used in the hash generation.
   * @returns {string} The generated MD5 hash.
   */
  private generateHash(ts: string): string {
    return CryptoJS.MD5(ts + this.privateApiKey + this.publicApiKey).toString();
  }
}
