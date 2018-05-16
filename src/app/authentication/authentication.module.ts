import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../authentication-guard';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule ],
	declarations: [ LoginComponent, SignUpComponent, UsersComponent ],
	exports: [ AuthenticationRoutingModule ],
	providers: [ AuthGuard ]
})
export class AuthenticationModule {}
