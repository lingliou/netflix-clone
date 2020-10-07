import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'; //only need import once!


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

seedDatabase(firebase); 
// only need call this once, to let seed data into database
// otherwise the database will have duplicate contents
// after database setup completed, comment out seedDatabase(firebase) 

//when setup database need make firebase rules as `allow read, write: if true;`
//after that, change rules back to `allow read, write: if false;`


export {firebase};
