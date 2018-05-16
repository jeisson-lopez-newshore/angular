import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './../authentication-guard';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: UsersComponent },
			{ path: 'users/:id', component: UsersComponent },
			{ path: 'login/:id', component: LoginComponent, canActivate: [ AuthGuard ] },
			{ path: 'signup', component: SignUpComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
