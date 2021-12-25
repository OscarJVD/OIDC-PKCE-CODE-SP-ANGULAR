// const idpURL = `https://my.local.host:50000/oidc`;
const idpURL = `https://oidc.soyyoadmin.com/oidc`;
// const idpURL = `https://93clxfjlqd.execute-api.us-east-2.amazonaws.com/oidc`;
const spURL = `https://my.local.host:4200`;

// const clientID = `foo`;
// const secretID = `foo`;
const clientID = `s6U1ZxrkqUWI0b3AI27ep2T3xUX2iKaMKQFWutNTPB4rPbx`;
const secretID = `50L8evxHkUL0WDsX2L2fBWPjAxJvzmCh26FIwNVLOloN9zNfIcyUNuK4HwKLEhWHpCo3fq`;

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

  logout: `${logoutURL}?client_id=${clientID}&response_type=${respType}&scope=${respScope}&redirect_uri=${redirectURI}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallenge_method}&code_verifier=${codeVerifier}&post_logout_redirect_uri=${spURL}`,
};
