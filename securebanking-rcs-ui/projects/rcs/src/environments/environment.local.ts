import { environment as devDefaultEnv } from './environment.dev.default';

export const environment = {
  ...devDefaultEnv,
  production: false,
  authorizationServer: 'https://iam.dev.forgerock.financial',
  remoteConsentServer: 'http://localhost:8080',
  defaultRealm: 'alpha',
  // featureFlags: {
  //   disableProfileForm: false,
  //   disablePasswordForm: false
  // },
  // routeDenyList: ['profile/password']
};
