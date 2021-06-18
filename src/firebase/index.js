
import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBUdg1TVOXAWEXU9oMdn8G_G3yNgHLQ0Wg",
    authDomain: "wonkasstoreperu.firebaseapp.com",
    projectId: "wonkasstoreperu",
    storageBucket: "wonkasstoreperu.appspot.com",
    messagingSenderId: "734104717463",
    appId: "1:734104717463:web:b1e07c18d5587fbde1c1d2",
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);