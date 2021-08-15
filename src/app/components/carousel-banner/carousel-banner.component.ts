import { StoreModelService } from './../../services/store-model.service';
import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper/core";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.css']
})
export class CarouselBannerComponent implements OnInit{

  public table = 'banners';
  public properties;
  public store : StoreModelService;

  constructor(private storeModelService : StoreModelService){
    this.store = this.storeModelService.load();
  }

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  ngOnInit(): void {
    this.properties = this.store.getSectionByName(this.table);
  }

}
