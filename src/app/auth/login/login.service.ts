import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  public login(obj: { email: string, password: string }) {
    return this._http.post(baseUrl + '/auth/login', obj);
  }
}
