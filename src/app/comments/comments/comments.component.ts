import { Post } from './../../entities/post.interface';
import { ResourceService } from './../../share/resource.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {
	url = 'http://jsonplaceholder.typicode.com/comments';
	dataObs$: Observable<Comment[]>;
	@Input() data: string;

	constructor(service: ResourceService) {
		this.dataObs$ = service.getResource<Comment>(this.url, 'body');
		console.log(this.dataObs$);
	}

	ngOnInit() {}
}
