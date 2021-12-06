import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { observable, Observable, of } from 'rxjs';
import { switchMap, finalize, catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AwsCognitoService } from './aws-cognito.service';


@Injectable()
export  class  TokenResolverService implements Resolve<any> {

  constructor(private location: Location,
              private awsCognitoService: AwsCognitoService,
              private router: Router) { }

     resolve(code:any): any {

    // const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    // const code: string | null= urlParams.get('code');

    if (!code) {
      return of(null);
    }
     this.awsCognitoService.getTokenDetailsFromIdp(code)
     .subscribe(
      (res: any) => {
        if( res.access_token){
          localStorage.setItem('Token', res.access_token);
          this.router.navigate(['registro']);
        }
      }
    )
  }

  loggedIn()
  { // regresar el token
    return !!localStorage.getItem('Token');
  }

    // getTokenDetailsFromIdp(code: string): any | null {
    // // this.location.replaceState(window.location.pathname)
    //   // return this.awsCognitoService.getTokenDetailsFromIdp(code)
    // }
  }


