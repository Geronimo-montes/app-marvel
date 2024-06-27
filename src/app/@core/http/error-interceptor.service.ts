// error-interceptor.service.ts

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../../@theme/components/notification/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, Mensaje: ${error.message}`;
        }

        if (error.status === 409) {
          errorMessage = `Error 409: Conflicto al procesar la solicitud`;
        }
        this.notificationService.showNotification({
          title: `${error.error.code}`,
          type: 'error',
          message: `${error.error.message}`,
          duration: 5000,
        });
        return throwError(errorMessage);
      })
    );
  }
}
