// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpva39-CtxOCqbL2c81z66FzVEwhs0BM0",
  authDomain: "e-commerce-fd98b.firebaseapp.com",
  projectId: "e-commerce-fd98b",
  storageBucket: "e-commerce-fd98b.appspot.com",
  messagingSenderId: "495757825508",
  appId: "1:495757825508:web:734769f1700bb9898563f1",
  measurementId: "G-9ED0PV0VCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);