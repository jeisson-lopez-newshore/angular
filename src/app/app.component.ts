import { User } from './entities/User';
import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	user: User = new User();
	signInEnable = true;

	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	/**
   * Method used to get the user name
   * @param event
   */
	public getUserName(event: KeyboardEvent) {
		let inpt: any;
		inpt = event.currentTarget as HTMLInputElement;
		console.log(inpt.value);
		this.user.userName = inpt.value;
	}

	/**
   * Method used to get the user password
   * @param event
   */
	public getUserPassword(event: KeyboardEvent) {
		let inpt: any;
		inpt = event.currentTarget as HTMLInputElement;
		console.log(inpt.value);
		this.user.userPassword = inpt.value;
	}

	public authenticateUser() {
		this.authenticationService.signIn(this.user);
		this.router.navigateByUrl('authentication/login/' + this.user.userName);
		this.updateControlls();
	}

	public logOutUser() {
		this.authenticationService.signOut();
		this.router.navigateByUrl('/');
		this.updateControlls();
	}

	public updateControlls() {
		this.signInEnable = this.authenticationService.isUserAuthenticated() ? false : true;
	}
}
