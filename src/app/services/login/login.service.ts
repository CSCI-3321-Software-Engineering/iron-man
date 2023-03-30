import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service/public-api';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloggedin: boolean = false;

  constructor(
    private http: HttpClient
  ) { }
  
  validateLogin(username: String, password: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/login`,
      { user: username, pass: password }
    )
  }
}

