/*
* No es necesario recargar el angular al hacer cambios en environment
*/
// const idpURL = `http://localhost:3234/oidc`;
// const idpURL = `https://my.local.host:50000/oidc`;
// const idpURL = `http://localhost:3000`;
const idpURL = `https://oidc.soyyoadmin.com/oidc`;
// const idpURL = `https://93clxfjlqd.execute-api.us-east-2.amazonaws.com/oidc`;
const spURL = `https://my.local.host:4200`;

// const clientID = `foo`;
// const secretID = `bar`;
const clientID = `M8T1B5r09nMvQVACBamVpAo6TA6ga6LtNpOVuRJEU5H0EJu`;
const secretID = `Z9xEwptOVhapuhhy0ZqDaiDbMzZUxX9btXBr5E1IbcH7q1XywIJukDxMeXEwFKgQqWL7Jh`;

const redirectURI = `${spURL}/registro`;
const respType = `code`;
const grantType = `authorization_code`;
const respScope = `openid`;

// CODE AUTHORIZATION
const codeChallenge = `xVeHS4QsY2PauyIOybSnOQZcRv-hEqoesLRLmpMofmg`;
const codeChallenge_method = `S256`;
const codeVerifier = `TiGKuB0O0OLzm9czCi_5KyMKuXC-IJdmxzae8m5U.6JRTEnKV7X~zS4y6rSLgdNbM876HcdY2s.N2BZDm5iW2YFM0pOS6FwImoi6lumhGyyzyBCrbl2jTQ.d3KU47t1A`;

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

  logout: `${logoutURL}?client_id=${clientID}&secret_id=${secretID}&response_type=${respType}&scope=${respScope}&redirect_uri=${redirectURI}&code_challenge=${codeChallenge}&code_challenge_method=${codeChallenge_method}&code_verifier=${codeVerifier}&post_logout_redirect_uri=${spURL}`,
};
