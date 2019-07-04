import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        public cookieService: CookieService,
        public router: Router
    ) { }

    canActivate(): boolean {
        const token = this.cookieService.get('AuthToken');

        if (token === '') {
            this.router.navigate(['auth']);
            return false;
        }

        let payload_buff = token.split('.')[1];
        payload_buff = atob(payload_buff);
        const payload = JSON.parse(payload_buff);

        if (token !== '' && (payload.exp > (Date.now() / 1000)) && payload.iss === 'Confined Materials') {
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    }
}
