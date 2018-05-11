import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../share/resource.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../entities/Post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  url = 'http://jsonplaceholder.typicode.com/posts';
  dataObs$: Observable<Post[]>;

  constructor(service: ResourceService) {
    this.dataObs$ = service.getResource<Post>(this.url, 'title');
  }

  ngOnInit() {
  }

}
