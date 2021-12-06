// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  client_id: 'foo',
  secret_id: 'foo',

  // OBTENER CODE CON EXITO
  loginURL:
    'https://my.local.host:50000/auth?' +
    // 'https://oidc.soyyoadmin.com/oidc/auth?' +
    'client_id=foo&response_type=code&scope=openid&redirect_uri=https://my.local.host:4200/registro&code_challenge=l49rA_UT4xYzyPvdDuqpAjBTNHMGm4nxoBJAbsC8mNs&code_challenge_method=S256&code_verifier=eALiy65ijy9CGohwJ8AOjk34H_OE0OYYzeo8~-M5936nTDi1QzA5SPKSZ.ADzYnHCbq9XuB.FNL7gJJUPc.1TMNvONQRla.gcc8uWqYa-lKIMNoqhlhnlI.Gx-XYr.SG',
    // &code_challenge_method=S256
    // &code_challenge_method=ñRS256
    // &state=1234zyx
  // state=xtF9L05xb8EgI9V3i1ih5qDh4PW7RaMNdwTnoBDD&nonce=xtF9L05xb8EgI9V3i1ih5qDh4PW7RaMNdwTnoBDD&
  // loginURL: 'https://my.local.host:50000/login?' +
  // 'client_id=foo&response_type=code&scope=openid&issuer:https://cognito-idp.us-east-2.amazonaws.com/us-east-2_xh6BdcnD3&redirect_uri=https://my.local.host:4200/registro',

  redirectURL: 'https://my.local.host:4200/registro',

  idpTokenURL: 'https://my.local.host:50000/token',
  // idpTokenURL: 'https://my.local.host:50000/auth',

  logout_uri: 'https://my.local.host:4200/registro',
  logout:
    'https://my.local.host:50000/session/end?' +
    'client_id=foo&response_type=code&scope=openid&redirect_uri=https://my.local.host:4200/registro&code_challenge=l49rA_UT4xYzyPvdDuqpAjBTNHMGm4nxoBJAbsC8mNs&code_challenge_method=S256&code_verifier=eALiy65ijy9CGohwJ8AOjk34H_OE0OYYzeo8~-M5936nTDi1QzA5SPKSZ.ADzYnHCbq9XuB.FNL7gJJUPc.1TMNvONQRla.gcc8uWqYa-lKIMNoqhlhnlI.Gx-XYr.SG?post_logout_redirect_uri=https://my.local.host:4200',
};
/*
client_id: '3chjqdttb8pfum7pchbfue9gop',
  secret_id: '1t1mhti23acf0j1lknelh0amq895v8pg4o2o75jd6mmm81c5vbd8',

  loginURL: 'https://registroidp-soyyo.auth.us-east-2.amazoncognito.com/login?' +
              'client_id=3chjqdttb8pfum7pchbfue9gop&response_type=code&scope=email&issuer:https://cognito-idp.us-east-2.amazonaws.com/us-east-2_xh6BdcnD3&redirect_uri=http://localhost:4200/registro',

  redirectURL: 'http://localhost:4200/registro',

  idpTokenURL: 'https://registroidp-soyyo.auth.us-east-2.amazoncognito.com/oauth2/token',
  logout_uri:'http://localhost:4200/login',
  logout: 'https://registroidp-soyyo.auth.us-east-2.amazoncognito.com/logout?' +
  'client_id=3chjqdttb8pfum7pchbfue9gop&response_type=code&scope=email&issuer:https://cognito-idp.us-east-2.amazonaws.com/us-east-2_xh6BdcnD3&logout_uri=http://localhost:4200/login',
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/* client_id: '3j0124fpl7r7m2ibppnkmahtk2',
  secret_id: '1qo1sb7b99850bshc50lvk48rncitgnoe6cbodqdlb40llg46skf',

  loginURL: 'https://registro-idp-soyyo.auth.us-east-1.amazoncognito.com/login?' +
              'client_id=3j0124fpl7r7m2ibppnkmahtk2&response_type=code&scope=email&issuer:https://cognito-idp.us-east-2.amazonaws.com/us-east-1_BHd5PMa09&redirect_uri=http://localhost:4200/registro',

  redirectURL: 'http://localhost:4200/registro',

  idpTokenURL: 'https://registro-idp-soyyo.auth.us-east-1.amazoncognito.com/oauth2/token',
  logout_uri:'http://localhost:4200/login',
  logout: 'https://registro-idp-soyyo.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=3j0124fpl7r7m2ibppnkmahtk2&response_type=code&scope=email&issuer:https://cognito-idp.us-east-2.amazonaws.com/us-east-1_BHd5PMa09&logout_uri=http://localhost:4200/login',
¨*/
