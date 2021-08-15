import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { StoreModelService } from "src/app/services/store-model.service";

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
  selector: 'carousel-offers',
  templateUrl: './carousel-offers.component.html',
  styleUrls: ['./carousel-offers.component.css']
})
export class CarouselOffersComponent implements OnInit{

  public offers;

  public table = 'offers';
  public properties;

  public store : StoreModelService;

  constructor(private storeModelService: StoreModelService) {
    this.store = this.storeModelService.load();;
  }

  ngOnInit(){
    this.properties = this.store.getSectionByName(this.table);
  }

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: false,
    autoplay: true,
    breakpoints: {
      // when window width is >= 320px
      1320: {
          slidesPerView: 5
      },
      1140: {
          slidesPerView: 4
      },
      960: {
          slidesPerView: 4
      },
      720: {
          slidesPerView: 3
      },
      470: {
          slidesPerView: 2
      },
      0: {
          slidesPerView: 1
      },
    }
  };
}
