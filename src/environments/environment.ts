// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.6:9001',
  appTitle: 'QaApp',
  PUBLIC_VAPID_KEY_OF_SERVER: 'BBuui5T3pIWV_ZyyZel8ynOQLlJO5juM6knPoBzg9shZjkmcqaFm0okyCbWOw2pxSSdEo2p9kiSQYn0V8A-GOjE',
  WS_URL: 'ws://192.168.1.6:9001/notification',
  SSE_URL: '//192.168.1.6:9001/stream'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
