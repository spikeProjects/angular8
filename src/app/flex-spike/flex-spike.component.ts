import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'porsche-flex-spike',
  templateUrl: './flex-spike.component.html',
  styleUrls: ['./flex-spike.component.sass']
})
export class FlexSpikeComponent implements OnInit {
  @HostBinding('class.layout-body') hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
