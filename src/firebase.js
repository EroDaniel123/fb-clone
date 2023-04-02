import firebase from "firebase"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClN-WoLxgQFD1G3b8VdDhI2VOsOu1-Zpo",
  authDomain: "facebook-clone-7a48b.firebaseapp.com",
  projectId: "facebook-clone-7a48b",
  storageBucket: "facebook-clone-7a48b.appspot.com",
  messagingSenderId: "950257560143",
  appId: "1:950257560143:web:95d801bdcbfad71743d83a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db