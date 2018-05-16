import { TransfersComponent } from './transfers/transfers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: TransfersComponent },
	{
		path: 'authentication',
		loadChildren: './authentication/authentication.module#AuthenticationModule'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
