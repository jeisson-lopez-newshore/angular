import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cp-show',
  templateUrl: './cp-show.component.html',
  styleUrls: ['./cp-show.component.scss']
})
export class CpShowComponent implements OnInit {

  @Input() inputdata;

  constructor() { }

  ngOnInit() {
  }

}
