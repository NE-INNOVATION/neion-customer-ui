import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomerUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
