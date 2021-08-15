import { StoreModelService } from 'src/app/services/store-model.service';
import { PaymentMethodsComponent } from './../../components/payment-methods/payment-methods.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent implements OnInit {

  public store : StoreModelService;

  public columns = [
    {
      title: "LOJAS",
      title_color: "#84C73F",
      index: 1
    },
    {
      title: "CATEGORIAS",
      title_color: "#84C73F",
      index: 2
    },
    {
      title: "CONTATO",
      title_color: "#84C73F",
      index: 3
    }
  ];

  constructor(private storeModelService : StoreModelService) {
    this.store = this.storeModelService.load();
  }

  getColumnSize(){
    let qty = 0;
    if(this.sections.stores){
      qty += 1;
    }
    if(this.sections.categories){
      qty += 1;
    }
    if(this.sections.contact_info){
      qty += 1;
    }
    return 12 / qty;
  }

  public sections;

  ngOnInit(): void {
    this.sections = this.store.getSections();
  }
}
