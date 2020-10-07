import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFXsxZrbCRjwu4K_b78kIlYhKkm4Mn4Rk",
    authDomain: "netflix-clone-aa218.firebaseapp.com",
    databaseURL: "https://netflix-clone-aa218.firebaseio.com",
    projectId: "netflix-clone-aa218",
    storageBucket: "netflix-clone-aa218.appspot.com",
    messagingSenderId: "951408835001",
    appId: "1:951408835001:web:7fc597f553e086a0b09e68",
    measurementId: "G-J88VNSS1T4"
}

const firebase = Firebase.initializeApp(config);

export {firebase};
