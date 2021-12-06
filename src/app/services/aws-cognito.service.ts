import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AwsCognitoService {
  details = {};
  constructor(private http: HttpClient) {}

  getTokenDetailsFromIdp(callbackCode: string): Observable<any> {
    try {
      const details: any = { // bad request 400
        grant_type: 'authorization_code',
        code: callbackCode,
        response_type: 'code',
        code_verifier: 'eALiy65ijy9CGohwJ8AOjk34H_OE0OYYzeo8~-M5936nTDi1QzA5SPKSZ.ADzYnHCbq9XuB.FNL7gJJUPc.1TMNvONQRla.gcc8uWqYa-lKIMNoqhlhnlI.Gx-XYr.SG',
        // scope: 'openid+email', // openid+profile - openid+email
        scope: 'openid', // openid+profile - openid+email
        // scope: 'openid', // openid+profile - openid+email
        // redirect_uri: environment.redirectURL,
        redirect_uri: 'https://my.local.host:4200/registro',
        // client_id:  environment.client_id,
        // secret_id:  environment.secret_id,
        // client_id: 'foo',
        // secret_id: 'foo',
      };

      const formBody = Object.keys(details)
        .map(
          (key: any) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`
        )
        .join('&');

      return this.http.post<any>(environment.idpTokenURL, formBody, {
        responseType: 'json',
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(`${environment.client_id}:${environment.secret_id}`),
        }),
        // ,
        // params:{
        //   code: callbackCode,
        //   grant_type: "id_token",
        //   client_id: "3chjqdttb8pfum7pchbfue9gop",
        //   redirect_uri: environment.redirectURL,
        // }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public logoutUserFromCognito(): any {
    return this.http.get<any>(environment.logout);
  }
}
