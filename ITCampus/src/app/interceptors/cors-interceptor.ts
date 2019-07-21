import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CorsInterceptor implements HttpInterceptor {

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
            // console.log(req.headers);
            // console.log(req.headers.append());
            req = req.clone({
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Access-Control-Allow-Origin': '*',
                })
            });

        return next.handle(req);
    }
}
