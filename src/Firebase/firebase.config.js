// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJA7bPOCpL4-yjPiKPseJABSj8gK8RxFs",
  authDomain: "nobabdine-c57d9.firebaseapp.com",
  projectId: "nobabdine-c57d9",
  storageBucket: "nobabdine-c57d9.firebasestorage.app",
  messagingSenderId: "720989842752",
  appId: "1:720989842752:web:fd7b8bee4a0c1df1ae1ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;