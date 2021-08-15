import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor() { }

  // private apiUrl = 'https://api2-devel.convem.me';
  private apiUrl = 'http://localhost:8000';
  // private apiUrl = 'https://api2.convem.me';

  //Versão da API
  private apiVersion = '/V1';

  private sites = '/sites';
  private siteClientes = '/site-clientes';
  private configJson = '/config-json';

  getPathConfigJson(){
      return this.apiUrl + this.apiVersion + this.siteClientes + this.sites + this.configJson;
  }
}
