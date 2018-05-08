import { Observable } from 'rxjs/Observable';
import { YesOrNoServiceService } from './services/yes-or-no-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  image$: Observable<any>;
  url = 'https://yesno.wtf/api';

  /*Creando y consumiendo servicios Nota: se completa la petición del
  servicio en la template */
  constructor(private service: YesOrNoServiceService) {
    this.image$ = service.getResponse(this.url);
}


}
