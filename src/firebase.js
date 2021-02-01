import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL0pOebgpvbDJGPdG2tYexqq7NBNbIob4",
    authDomain: "facebook-clone-2c61d.firebaseapp.com",
    databaseURL: "https://facebook-clone-2c61d.firebaseio.com",
    projectId: "facebook-clone-2c61d",
    storageBucket: "facebook-clone-2c61d.appspot.com",
    messagingSenderId: "628191454014",
    appId: "1:628191454014:web:74fa0892c6df955fa0c26f",
    measurementId: "G-X1BGM8GPF3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default db;