import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA_tf-Sg5xKmyCi5PZOBgq7UEaxHk4Eypc",
  authDomain: "shoebay-ab94b.firebaseapp.com",
  projectId: "shoebay-ab94b",
  storageBucket: "shoebay-ab94b.firebasestorage.app",
  messagingSenderId: "10811332641",
  appId: "1:10811332641:web:e7b8d6de1ab2255770ab60",
  measurementId: "G-4Q0CR1RD71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth