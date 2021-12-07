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
      // bad request 400
      const details: any = {
        grant_type: environment.grantType,
        code: callbackCode,
        response_type: environment.respType,
        code_verifier: environment.codeVerifier,
        scope: environment.respScope,
        redirect_uri: environment.redirectURL,
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
