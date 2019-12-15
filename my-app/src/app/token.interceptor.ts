import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators'
import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(localStorage);
    const userToken = localStorage.getItem('token') || '';
    const modifiedReq = req.clone({ 
      headers: req.headers.append('token', userToken),
    });
    return next.handle(modifiedReq).pipe(
      tap(
        () => {},
        (data) => {
          alert(data.error);
        })
    );
  }
} 