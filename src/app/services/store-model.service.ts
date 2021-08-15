import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';

@Injectable()
export class StoreModelService extends BaseModelService{

  protected name = "store";

  private sitesId : Number;
  private domain: String;
  private storeType: String;
  private sections : Object;


  getSitesId(){
    return this.sitesId;
  }

  getDomain(){
    return this.domain;
  }

  getStoreType(){
    return this.storeType;
  }

  getSections(){
    return this.sections;
  }

  getSectionByName(name){
    let checked = false;
    let section;
    Object.keys(this.sections).forEach(element => {
      if(element == name){
        checked = true;
        section = this.sections[name];
      }
    });
    if(!checked){
      console.log('object not found, ' + name)
    }else{
      return section;
    }
  }


}
