import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

	constructor() {}

  	public setObject(name, object){
  		localStorage.setItem(name, JSON.stringify(object));
  	}

  	public getObject(name){
  		var item = localStorage.getItem(name);

  		if (item){
  			return JSON.parse(item);
  		} else {
  			return item;
  		}

  	}
}
