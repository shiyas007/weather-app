// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weather-api99.p.rapidapi.com/weather?city=%3CREQUIRED%3E',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weather-api99.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '5fb3f70525msha2b7cb03e7dbdb8p1e598ejsnc1a96e7e5e22'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
