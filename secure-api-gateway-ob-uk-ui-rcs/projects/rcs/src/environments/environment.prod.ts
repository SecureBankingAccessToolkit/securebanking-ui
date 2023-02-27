import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: true,
  remoteConsentServer: 'https://rcs.dev.forgerock.financial'
};
