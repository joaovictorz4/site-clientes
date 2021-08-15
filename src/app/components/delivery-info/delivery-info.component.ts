import { Component, OnInit } from '@angular/core';
import { StoreModelService } from 'src/app/services/store-model.service';

@Component({
  selector: 'delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {

  public sections;
  public store : StoreModelService;

  constructor(private storeModelService : StoreModelService){
    this.store = this.storeModelService.load();
  }

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }
}
