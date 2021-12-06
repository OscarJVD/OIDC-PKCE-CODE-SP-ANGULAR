import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormularioModel } from '../models/formulario.model';
import { FormularioOpenIdModel } from '../models/formularioopenid.model';

@Injectable()
export class DataServices {
  constructor(
    private toastr: ToastrService,
    private httpClient: HttpClient  ) {

  }
  // poolData = {
  //   UserPoolId: environment.cognitoUserPoolId, // Your user pool id here
  //   ClientId: environment.cognitoAppClientId, // Your client id here
  // };
  // userPool = new CognitoUserPool(this.poolData);
  // cognitoUser: any;


  /*---DECLARACIÓN DE VARABIALES---*/

  registro: FormularioModel;
  //registroOpenId: FormularioOpenIdModel[] = [];
  metadatas: string[];






  /*---RUTAS DE LAMBDAS ----*/
  readonly URL_API_SAML = 'http://127.0.0.1:3000/saml/';

  readonly URL_API_OID = 'http://127.0.0.1:3000/openid';

  //REGISTRO SAML
  /**
   *
   * @param registro1
   */
  agregarRegistroNuevo(registro1: FormularioModel) {
    if (this.registro === null) {
      this.registro;
    }

    this.addClient(registro1);
  }
  /**
   *
   * @param registro
   */
  addClient(registro: FormularioModel) {

    this.httpClient.post(this.URL_API_SAML + 'table', registro).subscribe(
      (response) => {
        const res = JSON.stringify(response);
        const validaciones = JSON.parse(res);

        if ( validaciones.campos == 'Datos correctamente registrados') {
          this.toastr.success(validaciones.campos.toString());
        } else {
          if(validaciones.campos == '') {
            this.toastr.error(validaciones.imagen.toString());
          }else {
            this.toastr.error(validaciones.campos.toString());
            this.toastr.error(validaciones.imagen.toString());
          }


        }
      },
      (error) => console.log('error guardar persona' + error)
    );
  }
  /**
   *
   * @returns
   */
  getEntitiesSaml(): any {
    try {
      //return this.http.get(this.URL_API);
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }).set('content-type', 'application/json');
      return this.httpClient.get(this.URL_API_SAML + 'table', { headers: headers });


    } catch (err) {
      console.log(err);
    }
  }
  /**
   *
   * @param id
   * @returns
   */
  getMetadatasSaml(id: string): any {
    try {
      //return this.http.get(this.URL_API);
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }).set('content-type', 'application/json');

      return this.httpClient.get(this.URL_API_SAML + `${id}`, { headers: headers });
    } catch (err) {
      console.log(err);
    }
  }

  //-----------------------------------------------------
  //REGISTRO OPEN ID
  /**
   *
   * @param registro1
   */
  agregarRegistroNuevoOpenId(registro1: FormularioOpenIdModel) {

    if (this.registro === null) {
      this.registro;
    }

    this.addClientOpenId(registro1);

  }
  /**
   *
   * @param registro
   */
  addClientOpenId(registro: FormularioOpenIdModel) {
    // const req = new HttpRequest('POST', 'http://127.0.0.1:3000/post', registro, {
    //   responseType: 'json',
    //   headers: new HttpHeaders()

    // })


    this.httpClient.post('http://127.0.0.1:3000/openid', registro).subscribe(
      (response) => {
        const res = JSON.stringify(response);
        const validaciones = JSON.parse(res);
        if (validaciones.campos == 'Datos correctamente registrados') {
          this.toastr.success(validaciones.campos.toString());
        } else {
          if(validaciones.campos !== ''){
            this.toastr.error(validaciones.campos.toString());
          }
          if(validaciones.imagen !== '') {
            this.toastr.error(validaciones.imagen.toString())
          }
          if(validaciones.validationURIS !== '') {
            this.toastr.error(validaciones.validationURIS.toString())
          }

        }
      }
    );
  }
  /**
   *
   * @returns
   */
  getEntitiesOpenId(): any {
    try {
      //return this.http.get(this.URL_API);
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }).set('content-type', 'application/json');

      return this.httpClient.get(this.URL_API_OID, { headers: headers });
    } catch (err) {
      console.log(err);
    }
  }


  // --------------------------------------------------------------
  //COGNITO AUTENTICACIÓN OIDC



}
