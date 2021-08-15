import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'store-info-content',
  templateUrl: './store-info-content.component.html',
  styleUrls: ['./store-info-content.component.css']
})
export class StoreInfoContentComponent implements OnInit {

  @Input() storeInfo;

  constructor() {
    console.log(this.storeInfo)

  }

  ngOnInit(): void {
    console.log(this.storeInfo)
  }

}
