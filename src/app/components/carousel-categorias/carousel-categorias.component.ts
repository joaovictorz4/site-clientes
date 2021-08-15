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
  selector: 'carousel-categorias',
  templateUrl: './carousel-categorias.component.html',
  styleUrls: ['./carousel-categorias.component.css']
})
export class CarouselCategoriasComponent implements OnInit{

  public table = 'categories';
  public properties;
  public store : StoreModelService;

  constructor(private storeModelService : StoreModelService){
    this.store = this.storeModelService.load();
  }

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 6,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    autoplay: true,
    loop: true,
    watchOverflow: true,
    breakpoints: {
      // when window width is >= 320px
      1320: {
          slidesPerView: 6
      },
      1140: {
          slidesPerView: 5
      },
      960: {
          slidesPerView: 5
      },
      720: {
          slidesPerView: 4
      },
      500: {
          slidesPerView: 3
      },
      380: {
          slidesPerView: 2
      },
      0: {
          slidesPerView: 1
      }
    }
  };

  ngOnInit(): void {
    this.properties = this.store.getSectionByName(this.table);
  }
}
