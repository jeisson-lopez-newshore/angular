import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { pluck } from 'rxjs/operators';

@Injectable()
export class YesOrNoServiceService {

  clientService: HttpClient;

  constructor (private service: HttpClient) {
    this.clientService = service;
  }

  public test() {
    return 'hola';
  }

  public getResponse (url: string): Observable<any> {
    return this.clientService.get(url).pipe(pluck('image'));
  }

}
