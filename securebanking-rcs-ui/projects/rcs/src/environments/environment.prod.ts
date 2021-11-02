import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: true,
  authorizationServer: 'https://iam.dev.forgerock.financial',
  remoteConsentServer: 'https://rcs.dev.forgerock.financial'
};
