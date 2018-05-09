import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CommentsModule, PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
