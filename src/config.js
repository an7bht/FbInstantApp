import firebase from "firebase/compat/app";
const config = {
    apiKey: "AIzaSyBkBYxeuJWo8ZTEHDlBQSDPSEfexp0iYLs",
    authDomain: "my-game-html5-1.firebaseapp.com",
    databaseURL: "https://my-game-html5-1-default-rtdb.firebaseio.com",
    projectId: "my-game-html5-1",
    storageBucket: "my-game-html5-1.appspot.com",
    messagingSenderId: "82794997295",
    appId: "1:82794997295:web:0f5c54039e18ea09c7c8da",
    measurementId: "G-RQK9CTGXYX"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const realtimeDB = firebase.database();

export default firebase;