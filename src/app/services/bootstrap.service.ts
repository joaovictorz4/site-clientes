import { ConfigSiteService } from 'src/app/services/config-site.service';
import { SitesService } from './sites.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreModelService } from './store-model.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  private store: StoreModelService;

  constructor(private configSiteService: ConfigSiteService,
    private storeModelService: StoreModelService,
    private http : HttpClient) {
      this.store = this.storeModelService.load();
	}

  canActivate(): Observable<boolean>|boolean {
    var full = window.location.host
    full = 'crismarmercado.com.br';
    var parts = full.split('.')
    var domain = parts[0];
    let bootstrapStoreService = this;

    return this.configSiteService.getConfigJson(domain).pipe(
    map((response: any)=>{

      if (response['status'] === 0){
        var data = response.data;
        bootstrapStoreService.store
        .set('sitesId', data.id)
        .set('domain', data.domain)
        .set('storeType', data.storeType)
        .set('sections', data.sections)
        .save();
        return true;
      } else {
        return false;
      }
      return true;
    }));
  }

  getConfigJsonFromS3(domain){
    // $s3Link = 'https://s3.amazonaws.com/files.convem.me/site-clientes/'.$domain; MUDAR PRA ESSE DPS QQUANDO FOR COLOCAR EM PROD
    let s3Link = 'https://s3.amazonaws.com/files.convem.me/' + domain + '.com.br/config.json';
    return this.http.get(s3Link);
  }

}
