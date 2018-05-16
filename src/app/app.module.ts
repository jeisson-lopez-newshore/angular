import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService } from './authentication.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TransfersComponent } from './transfers/transfers.component';

@NgModule({
	declarations: [ AppComponent, TransfersComponent ],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{
				path: '',
				component: TransfersComponent
			},
			{
				path: 'authentication',
				loadChildren: './authentication/authentication.module#AuthenticationModule'
			}
		])
	],
	providers: [ AuthenticationService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
