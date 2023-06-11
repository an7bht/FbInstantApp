import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBkBYxeuJWo8ZTEHDlBQSDPSEfexp0iYLs",
    authDomain: "my-game-html5-1.firebaseapp.com",
    databaseURL: "https://my-game-html5-1-default-rtdb.firebaseio.com",
    projectId: "my-game-html5-1",
    storageBucket: "my-game-html5-1.appspot.com",
    messagingSenderId: "82794997295",
    appId: "1:82794997295:web:0f5c54039e18ea09c7c8da",
    measurementId: "G-RQK9CTGXYX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };