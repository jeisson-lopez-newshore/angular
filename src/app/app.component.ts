import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'My application';
	author = 'Jeisson López';
	count = 0;
	imageSource = './../assets/img/kenshin.jpg';
}
