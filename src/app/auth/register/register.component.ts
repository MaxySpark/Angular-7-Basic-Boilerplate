import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterService } from './register.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { IApiResponse } from '../../../interface/IApiResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  passsword = new FormControl('', [Validators.required]);
  confirm_passsword = new FormControl('', [Validators.required, CustomValidators.equalTo(this.passsword)]);
  constructor(
    private fb: FormBuilder,
    private _service: RegisterService,
    private _cookieService: CookieService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: [
        null,
        Validators.compose([Validators.required])
      ],
      lastname: [
        null,
        Validators.compose([Validators.required])
      ],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: this.passsword,
      confirm_password: this.confirm_passsword
    });
  }

  onSubmit() {

    this._service.register({
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
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
