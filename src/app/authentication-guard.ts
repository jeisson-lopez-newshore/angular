import { AuthenticationService } from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authenticationService: AuthenticationService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log(
			'¡Authentication Guard! user authenticated: ' +
				this.authenticationService.isUserAuthenticated()
		);
		return this.authenticationService.isUserAuthenticated();
	}
}
