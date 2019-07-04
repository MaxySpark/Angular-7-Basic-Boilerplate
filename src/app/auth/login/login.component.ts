import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { IApiResponse } from '../../../interface/IApiResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _service: LoginService,
    private _router: Router,
    private _cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: [
        null,
        Validators.compose([Validators.required])
      ]
    });
  }

  onSubmit() {

    this._service.login({
      email : this.loginForm.get('email').value,
      password : this.loginForm.get('password').value
    }).subscribe(
      (res: IApiResponse) => {
        this._cookieService.set('AuthToken', res.data.AuthToken);
        this._router.navigate(['dashboard']);
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }

}
