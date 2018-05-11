import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ResourceService {

  constructor(private httpClient: HttpClient) { }

  public getResource<T>(url: string, parameter: string): Observable<T[]> {
    return this.httpClient.get(url).pipe(
      map((collection: T[]) => {
      return collection.map(data => data[parameter]);
    }),
  );

  }

}
