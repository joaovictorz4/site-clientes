import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { StoreModelService } from './services/store-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'sites-clientes';

	public metaIsSet = false;
  public store : StoreModelService;
  public storeType;
  public configurations;

  constructor(private storeModelService: StoreModelService,
    private meta: Meta,
    private titleService: Title){
    this.store = this.storeModelService.load();
  }

  getVendorId(){
    this.storeType = this.store.getStoreType();
  }

  setMetaTag() {
    let description = this.configurations.description;
		if(description == undefined || description == null ){
      this.meta.addTag({name: "description", content: "Convem Delivery, Sua Loja Online!"});
    }else{
      this.meta.addTag({name: "description",content: description});
    }

		this.metaIsSet = true;
	}

	setTitle() {
    var title = this.configurations.title;

		if(title == undefined || title == null ){
				this.titleService.setTitle("Convem Delivery, Sua Loja Online!");
		} else {
				this.titleService.setTitle(title);
		}

		this.metaIsSet = true;
	}

  ngAfterViewChecked(){

    this.configurations = this.store.getSectionByName('configurations');
    if(this.configurations){
      this.getVendorId();
      if(!this.metaIsSet){
        this.setMetaTag();
        this.setTitle();
      }
    }
	}
}
