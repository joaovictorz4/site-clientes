import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigSiteService {


  constructor(private http: HttpClient,
    private apiconfig: ApiConfigService) { }

  getConfigJson(domain){
    return this.http.get(this.apiconfig.getPathConfigJson() + "/" + domain);
  }
}
