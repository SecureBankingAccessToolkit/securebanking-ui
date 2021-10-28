import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: true,
  authorizationServer: 'https://iam.dev.forgerock.financial/am',
  authenticationServer: 'https://iam.dev.forgerock.financial/am',
  remoteConsentServer: 'https://rcs.dev.forgerock.financial'
};
