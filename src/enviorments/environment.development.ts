// environment.development.ts

import { environment as baseEnvironment } from './environment';

export const environment = {
  ...baseEnvironment,
  serverBasePath: 'http://localhost:3000/' // Define la URL base del servidor para el entorno de desarrollo
};
