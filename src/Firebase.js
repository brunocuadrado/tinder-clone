import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtr905UggTZ4f82ZBzdzP7SrnIBc-10AI",
  authDomain: "tinder-clone-e2160.firebaseapp.com",
  projectId: "tinder-clone-e2160",
  storageBucket: "tinder-clone-e2160.appspot.com",
  messagingSenderId: "188856113174",
  appId: "1:188856113174:web:84392cf0af7c22c232bd37",
  measurementId: '${config.measurementId}',
  }



const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()

export default database