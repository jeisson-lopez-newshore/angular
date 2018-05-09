import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule, ShareModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
