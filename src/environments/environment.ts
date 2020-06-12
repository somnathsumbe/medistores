// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  hostUrl: 'http://192.168.0.100:8080/medistores',
  production:false,
  firebaseConfig : {
    apiKey: "AIzaSyD7CY29tIguM6PTVPLjg7oDvtbIGphPkn8",
    authDomain: "api-project-586589451606.firebaseapp.com",
    databaseURL: "https://api-project-586589451606.firebaseio.com",
    projectId: "api-project-586589451606",
    storageBucket: "api-project-586589451606.appspot.com",
    messagingSenderId: "586589451606",
    appId: "1:586589451606:web:77bb0214c21bf2372592f7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
