import { SitesService } from './services/sites.service';
import { FooterComponent } from './components/content-tab/footer/footer.component';

import { SwiperModule } from "swiper/angular";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupermarketComponent } from './stores/supermarket/supermarket.component';
import { CardOffersComponent } from './components/card-offers/card-offers.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiConfigService } from './services/api-config.service';
import { BootstrapService } from './services/bootstrap.service';
import { ConfigSiteService } from './services/config-site.service';
import { GenerateJwtService } from './services/generate-jwt.service';
import { FormsModule } from '@angular/forms';
import { CarouselOffersComponent } from './components/carousel-offers/carousel-offers.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselBannerComponent } from './components/carousel-banner/carousel-banner.component';
import { CarouselCategoriasComponent } from './components/carousel-categorias/carousel-categorias.component';
import { StoreModelService } from "./services/store-model.service";
import { BaseModelService } from "./services/base-model.service";
import { StorageService } from "./services/storage.service";
import { CategoryComponent } from './components/category/category.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { ContactAreaComponent } from './components/contact-area/contact-area.component';
import { MenuColumnComponent } from './components/menu-column/menu-column.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CardHeaderIconComponent } from './components/card-header-icon/card-header-icon.component';
import { ContentTabComponent } from './components/content-tab/content-tab.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { StoreInfoComponent } from './components/store-info/store-info.component';
import { ModalStoresComponent } from './components/modal-stores/modal-stores.component';
import { StoreInfoContentComponent } from './components/store-info-content/store-info-content.component';
import { ButtonOneComponent } from './components/button-one/button-one.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { IconTextOneComponent } from './components/icon-text-one/icon-text-one.component';
import { MenuButtonsComponent } from './components/menu-buttons/menu-buttons.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { HeaderMarket1Component } from './containers/headers/header-market1/header-market1.component';
import { ContainerOffersComponent } from './containers/container-offers/container-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermarketComponent,
    CardOffersComponent,
    CarouselOffersComponent,
    BannerComponent,
    CarouselBannerComponent,
    CarouselCategoriasComponent,
    CategoryComponent,
    MenuButtonComponent,
    FooterComponent,
    ContactAreaComponent,
    MenuColumnComponent,
    CardHeaderIconComponent,
    ContentTabComponent,
    PaymentMethodsComponent,
    StoreInfoComponent,
    ModalStoresComponent,
    StoreInfoContentComponent,
    ButtonOneComponent,
    DeliveryInfoComponent,
    IconTextOneComponent,
    MenuButtonsComponent,
    ButtonIconComponent,
    HeaderMarket1Component,
    ContainerOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SwiperModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [
    ApiConfigService,
    BootstrapService,
    ConfigSiteService,
    GenerateJwtService,
    StoreModelService,
    BaseModelService,
    StorageService,
    SitesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
