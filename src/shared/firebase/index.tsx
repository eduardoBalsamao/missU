// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLgkOtN3aQW0cYW4I3X0WCP3dhmkL8Aa4",
  authDomain: "missu-connect.firebaseapp.com",
  projectId: "missu-connect",
  storageBucket: "missu-connect.appspot.com",
  messagingSenderId: "26588766124",
  appId: "1:26588766124:web:a71928d486d8654356a409",
  measurementId: "G-47ZTFHMW28"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default app;
