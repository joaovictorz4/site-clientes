import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitesService {


  constructor(private http: HttpClient) { }

  // getConfigJsonFromS3(domain){
    // $s3Link = 'https://s3.amazonaws.com/files.convem.me/site-clientes/'.$domain; MUDAR PRA ESSE DPS QQUANDO FOR COLOCAR EM PROD
  //   let s3Link = 'https://s3.amazonaws.com/files.convem.me/' + domain + '.com.br/config.json';
  //   return this.http.get(s3Link);
  // }
}
