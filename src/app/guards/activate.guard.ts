import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AwsCognitoService } from '../services/aws-cognito.service';
import { TokenResolverService } from '../services/token-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class ActivateGuard implements CanActivate {
  validator: boolean = false;
  constructor(
    private router: Router,
    private tokenResolverService: TokenResolverService,
    private awsCognitoService: AwsCognitoService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const urlParams: URLSearchParams = new URLSearchParams(
      window.location.search
    ); //1)
    const code: any = urlParams.get('code'); // obtiene el code

    console.log(code);


    console.log('CODE DESDE CANACTIVATE: ' + code);

    /**
     * VALIDAR CODE Y TOKEN
     *  ----- VALIDATION CODE -----
     * 1. AL INTENTAR INICIAR SESIÓN APARECE UN CODE
     * 2. AL CAMBIAR LA VISTA PREGUNTA SI EXISTE CODE PORQUE SE NECESITA PARA CONSULTAR EL TOKEN
     *  ----- END VALIDATION CODE -----
     * 3.
     * */

    // 1. GUARDAMOS CODE SI NO EXISTE EN LOCALSTORAGE | AL CERRAR SESIÓN QUITA CODE Y TOKEN DEL LOCALSTORAGE
    let codeLS: any = localStorage.getItem('code'); // -- AQUI TRAE EL CODE DEL LOCALSTORAGE

    if (!codeLS) {
      if (!code) {
        this.router.navigate(['login']);
        this.validator = false;
        return this.validator;
      }
      localStorage.setItem('code', code); // -- SI NO ESTA EN LOCALSTORAGE COGE EL DEL LA URL -> ES PORQUE ESTA INICIANDO SESIÓN APENAS
    }

    codeLS = localStorage.getItem('code');
    if (!codeLS) {
      this.router.navigate(['login']);
      this.validator = false;
      return this.validator;
    } else {
      if (!localStorage.getItem('Token')) {
        if (!code) {
          return false;
        }
        this.awsCognitoService
          .getTokenDetailsFromIdp(code)
          .subscribe((res: any) => {
            if (res.access_token) {
              localStorage.setItem('Token', res.access_token);
              if (localStorage.getItem('Token')) {
                this.validator = true;
                this.router.navigate(['registro']);
              }
            }
          });

        this.validator = false;
        // }) // GUARDA TOKEN
        // })()
      } else {
        this.validator = !!localStorage.getItem('Token');
      }
      return this.validator; //(2)
    }
  }
}

