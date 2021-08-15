import { Component, OnInit } from '@angular/core';
import { StoreModelService } from 'src/app/services/store-model.service';

@Component({
  selector: 'contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.css']
})
export class ContactAreaComponent implements OnInit {

  public table = 'contact_info';
  public properties;

  public store : StoreModelService;

  constructor(private storeModelService: StoreModelService) {
    this.store = this.storeModelService.load();;
  }

  ngOnInit(): void {
    this.properties = this.store.getSectionByName(this.table);
  }

}
