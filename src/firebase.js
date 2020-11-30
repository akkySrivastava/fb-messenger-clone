// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADFLlpxJs5EYoeARdbE5ZlJx5sdKQ4VO4",
    authDomain: "fb-messenger-clone-akky.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-akky.firebaseio.com",
    projectId: "fb-messenger-clone-akky",
    storageBucket: "fb-messenger-clone-akky.appspot.com",
    messagingSenderId: "771603966576",
    appId: "1:771603966576:web:7e2795cd31365c0c70e2b5",
    measurementId: "G-GF9T4VCJY9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;