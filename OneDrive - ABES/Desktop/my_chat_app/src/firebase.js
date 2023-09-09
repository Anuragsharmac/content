
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA7LoqogWFK-W7ScNb79wyfkDr4HihVUKQ",
  authDomain: "anychat-1d3f2.firebaseapp.com",
  projectId: "anychat-1d3f2",
  storageBucket: "anychat-1d3f2.appspot.com",
  messagingSenderId: "1061569559966",
  appId: "1:1061569559966:web:00e32dab55bbb997bb2a8f",
  measurementId: "G-SBH0C9CSDF"
};


 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();