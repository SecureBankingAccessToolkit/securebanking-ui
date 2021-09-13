// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: true,
  authorizationServer: 'https://iam.dev.forgerock.financial/am',
  authenticationServer: 'https://iam.dev.forgerock.financial/am',
  remoteConsentServer: 'https://rcs.dev.forgerock.financial',
  defaultRealm: 'alpha',
  realmRedirections: {
    default: '/consent'
  },
};
/* docs
https://backstage.forgerock.com/docs/am/7.1/authentication-guide/login-using-REST.html
 */
/* endpoints for platforms
https://iam.dev.forgerock.financial/am/oauth2/realms/alpha/.well-known/openid-configuration
iamFQDN=iam.dev.forgerock.financial
https://{{iamFQDN}}/am/json/realms/root/authenticate
"authorization_endpoint": "https://iam.dev.forgerock.financial:443/am/oauth2/alpha/authorize"
 */
/* curl
curl \
--request POST \
--header "Content-Type: application/json" \
--header "Accept-API-Version: resource=2.0, protocol=1.0" \
'https://iam.dev.forgerock.financial/am/json/realms/root/realms/alpha/authenticate?goto=undefined'
Response:
{"authId":"eyJ0...N06n0_o","callbacks":[{"type":"NameCallback","output":[{"name":"prompt","value":"User Name"}],"input":[{"name":"IDToken1","value":""}],"_id":0},{"type":"PasswordCallback","output":[{"name":"prompt","value":"Password"}],"input":[{"name":"IDToken2","value":""}],"_id":1}],"header":"Sign In","description":"New here? <a href=\"#/service/Registration\">Create an account</a><br><a href=\"#/service/ForgottenUsername\">Forgot username?</a><a href=\"#/service/ResetPassword\"> Forgot password?</a>"}
 */
/*
https://iam.dev.forgerock.financial/am/json/realms/root/realms/alpha/authenticate?goto=undefined: 0 Unknown Error
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
