import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient
  ) { }

  public register(obj: {
    email: string,
    firstname: string,
    lastname: string,
    password: string
  }) {
    return this._http.post(baseUrl + '/auth/register', obj);
  }
}
