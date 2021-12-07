// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const idpURL = `https://my.local.host:50000/oidc`;
const spURL = `https://my.local.host:4200`;

const clientID = `foo`;
const secretID = `foo`;

const redirectURI = `${spURL}/registro`;
const respType = `code`;
const grantType = `authorization_code`;
const respScope = `openid`;

// CODE AUTHORIZATION
const codeChallenge = `j8DXrXnbQyVQQUEISsv4jgSjtfSQynIPNKYYlO6ALTA`;
const codeChallenge_method = `S256`;
const codeVerifier = `FhlaErgZAfmSEcCwpxU6taC8-EJ7pBGxy3b7dPakQfWISXsrPKzW-eiZ1JTeOnlosAR~rp4I5oOU3-MAeF-rL-8aGlLCJNTjQNb_YJPMn9ungPlg4EWNATO-o~JuQcxq`;

// ENDPOINTS
const authURI = `${idpURL}/auth`;
const idpTokenURI = `${idpURL}/token`;
const logoutURL = `${idpURL}/session/end`;
// END ENDPOINTS

export const environment = {
  production: false,

  client_id: clientID,
  secret_id: secretID,

  // OBTENER CODE CON EXITO
  loginURL: `${authURI}?client_id=${clientID}&response_type=${respType}&scope=${respScope}&redirect_uri=${redirectURI}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallenge_method}&code_verifier=${codeVerifier}`,

  redirectURL: redirectURI,
  grantType,
  respType,
  respScope,
  codeVerifier,
  idpTokenURL: idpTokenURI,

  logout: `${logoutURL}?client_id=${clientID}&response_type=${respType}&scope=${respScope}&redirect_uri=${redirectURI}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallenge_method}&code_verifier=${codeVerifier}`,
  // &post_logout_redirect_uri=${spURL}
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
