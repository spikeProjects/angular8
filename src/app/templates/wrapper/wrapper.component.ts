import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'porsche-wrapper',
  template: `
    <div>
      <h1>Test ng-content</h1>
      <!-- <ng-content></ng-content> -->
    </div>
    <!--will be replaced by porsche-counter-->
    <ng-content></ng-content>
  `,
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
