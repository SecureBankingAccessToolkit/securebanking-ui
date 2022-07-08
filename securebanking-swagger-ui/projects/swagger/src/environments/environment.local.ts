import { environment as defaultEnv } from './environment.default';

export const environment = {
  ...defaultEnv,
  production: false,
  swaggerJSON: 'https://rs.dev.forgerock.financial/api-docs'
};
