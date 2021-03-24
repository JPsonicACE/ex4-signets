import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBv44JPPQoImY8w0DDBFSlvEraIE58oQgY",
  authDomain: "ex3-produits-7e626.firebaseapp.com",
  projectId: "ex3-produits-7e626",
  storageBucket: "ex3-produits-7e626.appspot.com",
  messagingSenderId: "343154393616",
  appId: "1:343154393616:web:fb4cc05002f29c6dd18095"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
