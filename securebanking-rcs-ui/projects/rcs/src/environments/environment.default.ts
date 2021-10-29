// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  authorizationServer: 'http://localhost:9080',
  remoteConsentServer: 'http://localhost:8080',
  defaultRealm: 'openbanking',
  realmRedirections: {
    default: '/profile'
  },
  client: {
    name: 'Forgerock',
    adminContact: 'openbanking-support@forgerock.com',
    iconWidth: 35,
    iconHeight: 39,
    logoWidth: 230,
    logoHeight: 'auto'
  },
  featureFlags: {
    disableProfileForm: false,
    disablePasswordForm: false
  },
  routeDenyList: [],
  devModules: []
};
