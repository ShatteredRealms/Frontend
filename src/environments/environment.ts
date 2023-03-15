// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const DOMAIN = 'localhost';

const CHAT_API_PORT = 8180;
const CHAT_API_VERSION = 'v1';
const CHAT_API_BASE_URL = `http://${DOMAIN}:${CHAT_API_PORT}`;
const CHAT_API_URL = `${CHAT_API_BASE_URL}/${CHAT_API_VERSION}`;
const CHAT_GRPC_URL = DOMAIN;

const KEYCLOAK_DOMAIN = 'http://localhost:8080';
const KEYCLOAK_REALM = 'default';
const KEYCLOAK_CLIENT = 'sro-web';

export const environment = {
  production: false,
  DOMAIN: DOMAIN,
  CHAT_API_URL: CHAT_API_URL,
  CHAT_API_BASE_URL: CHAT_API_BASE_URL,
  CHAT_GRPC_URL: CHAT_GRPC_URL,
  KEYCLOAK_DOMAIN: KEYCLOAK_DOMAIN,
  KEYCLOAK_REALM: KEYCLOAK_REALM,
  KEYCLOAK_CLIENT: KEYCLOAK_CLIENT,
  recaptcha: {
    siteKey: '6LeFKkEhAAAAALeg05zJHu1kKaj-vSPdJ80ilEBV'
  },
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
