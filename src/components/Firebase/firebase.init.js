
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDa0E-yBsNRlCOYylyzcB7U7OLB3RlMqbA",
  authDomain: "electrical-tools-manufacturer.firebaseapp.com",
  projectId: "electrical-tools-manufacturer",
  storageBucket: "electrical-tools-manufacturer.appspot.com",
  messagingSenderId: "345300456975",
  appId: "1:345300456975:web:92fdec234cdbbae9f7b57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
export default auth;