import { Component, OnInit } from '@angular/core';
import { StoreModelService } from 'src/app/services/store-model.service';

@Component({
  selector: 'header-market1',
  templateUrl: './header-market1.component.html',
  styleUrls: ['./header-market1.component.css']
})
export class HeaderMarket1Component implements OnInit {

  public table = 'headers';
  public menuButtons;
  public properties;

  public store : StoreModelService;

  constructor(private storeModelService: StoreModelService) {
    this.store = this.storeModelService.load();;
  }

  ngOnInit(): void {
    this.properties = this.store.getSectionByName(this.table);
    this.menuButtons = this.store.getSectionByName('buttons');
  }
}
