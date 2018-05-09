import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule, ShareModule
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent]

})
export class PostsModule { }
