import { Injectable } from '@angular/core';

import { StorageService } from '../services/storage.service'

@Injectable()
export class BaseModelService {

	protected name;
	protected ignoreSerialize = ['name','ignoreSerialize', 'storageService', 'store', 'storeModelService', 'storageServiceInject'];

	constructor(private storageService: StorageService) {
	}

	public load(){

		var obj = this.storageService.getObject(this.name);

		if (typeof obj == 'object'){
			for(var prop in obj) {
				//Ignora as propriedades listadas
				if (this.ignoreSerialize.indexOf(prop) != -1){
					continue;
				}

	   			this[prop] = obj[prop];
			}
		}

		return this;
	}

	public clear(){
		var obj = this.load();

		if (typeof obj == 'object'){
			for(var prop in obj) {

				//Ignora as propriedades listadas
				if (this.ignoreSerialize.indexOf(prop) != -1){
					continue;
				}

				delete this[prop];
	   			this[prop] = this.get(prop);
			}
			this.save()
		}

		//Atualiza o storage
		this.save();

		//Retorna a instancia
		return this;
	}

	public save(){
		var obj = obj ? obj : {};

		if (typeof this == 'object'){
			for(var prop in this) {
				//Ignora as propriedades listadas
				if (this.ignoreSerialize.indexOf(prop) != -1){
					continue;
				}

	   			obj[prop] = this[prop];

			}
		}

		this.storageService.setObject(this.name, obj);
		return this;
	}

	public get(name){
		//Se o campo tiver um assessor
		if (typeof this[this.snakeToCamel("get_" + name)] == "function"){
			return this[this.snakeToCamel("get_" + name)]();
		} else {
			return this[name];
		}
	}

	public set(name, value){
		this[name] = (typeof value == 'undefined' ? null : value);
		return this;
	}

	private snakeToCamel(s){
    	return s.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
	}

	//Obtem um valor ou retorna o padrão se for vazio
	protected nvl(value, defaultValue){
		return value ? value : defaultValue;
	}

}
