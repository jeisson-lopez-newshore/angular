import { YesOrNoServiceService } from './services/yes-or-no-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [YesOrNoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
