import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOMQOxGJ_Hbp14bcZH3gZsOvW0kkE91io",
    authDomain: "orderhound-5f2fa.firebaseapp.com",
    databaseURL: "https://orderhound-5f2fa.firebaseio.com",
    projectId: "orderhound-5f2fa",
    storageBucket: "orderhound-5f2fa.appspot.com",
    messagingSenderId: "956567692264",
    appId: "1:956567692264:web:8260f8fb41f8594c20fa5d",
    measurementId: "G-F4HQ300PVW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;