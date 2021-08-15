import { Component, OnInit } from '@angular/core';
import { StoreModelService } from 'src/app/services/store-model.service';

@Component({
  selector: 'menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css']
})
export class MenuButtonsComponent implements OnInit {

  public table = 'buttons';
  public properties;
  public store : StoreModelService;

  constructor(private storeModelService : StoreModelService){
    this.store = this.storeModelService.load();
  }
  ngOnInit(): void {
    this.properties = this.store.getSectionByName(this.table);
    this.properties.length = this.properties.length;
  }
}
