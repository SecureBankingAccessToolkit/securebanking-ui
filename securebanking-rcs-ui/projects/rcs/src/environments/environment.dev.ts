// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: true,
  authorizationServer: 'https://iam.dev.forgerock.financial',
  remoteConsentServer: 'https://rcs.dev.forgerock.financial',
  defaultRealm: 'alpha',
};
