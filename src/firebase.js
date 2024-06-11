import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBReBdq5woA9C4imSiPLWDBfbLhjalamuA",
    authDomain: "disneyplus-clone-849cc.firebaseapp.com",
    projectId: "disneyplus-clone-849cc",
    storageBucket: "disneyplus-clone-849cc.appspot.com",
    messagingSenderId: "355518749320",
    appId: "1:355518749320:web:b08e7912a45efc402d5d3d",
    measurementId: "G-28RZLTVWS7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider,storage};
export default db;
