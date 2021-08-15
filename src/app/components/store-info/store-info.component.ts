import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css']
})
export class StoreInfoComponent implements OnInit {

  public storeInfo;

  constructor() { }

  ngOnInit(): void {
    // this.storeInfo = JSON.parse(localStorage.getItem('fluxo')); // mudarpara store-info no banco dps...
  }

}
