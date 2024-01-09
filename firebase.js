// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFuIcSdl16DoxzkrM9sL2DDHCPQpjlfUk",
  authDomain: "spotify-clone-17e02.firebaseapp.com",
  projectId: "spotify-clone-17e02",
  storageBucket: "spotify-clone-17e02.appspot.com",
  messagingSenderId: "573530790601",
  appId: "1:573530790601:web:6127249215fcab4bc50b18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const auth=getAuth();
const storage=getStorage();
const provider=new GoogleAuthProvider();
const timestamp=serverTimestamp();

export{app,db,auth,storage,timestamp,provider};
