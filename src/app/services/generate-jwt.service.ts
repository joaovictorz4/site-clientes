import { Injectable } from '@angular/core';
import * as Fingerprint2 from 'fingerprintjs2';

@Injectable({
  providedIn: 'root'
})
export class GenerateJwtService {

  constructor() {}

    canActivate(): Promise<Boolean>|boolean {

    if(!localStorage.getItem('JWT')) {
    return new Promise((resolve, reject) => {

    new Fingerprint2.get((result) => {
    localStorage.setItem('deviceToken', result['key']);
    //TODO PEGAR ALGUM PARAMETRO DO NAVEGADOR COMO REGISTRO UNICO
    let token = localStorage.getItem('deviceToken');
    var userAgent = navigator.userAgent || navigator.vendor || window['opera'];
    var platform = "";

    if (/windows phone/i.test(userAgent)) {
        platform = "windows";
    } else if (/android/i.test(userAgent)) {
        platform = "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
        platform = "ios";
    } else {
        platform = "whatever";
    }

    // this.loginService.deviceToken(token, platform).subscribe((data) => {
    //   if (data['status'] == 0) {
        // localStorage.setItem("JWT", data['JWT']);
        // resolve(true);
      // } else {
      //   this.alertService.alert({title: "Atenção", message: "Ops... Houve algum erro. Tente novamente!"});
      //   resolve(false);
      // }

    // }, (data) => {
    //     this.alertService.alert({title: "Atenção", message: "Ops... Houve algum erro. Tente novamente!"});
    //     resolve(false);
    //   });
    });
    });

    } else {
    return true;
    }
  }
}
