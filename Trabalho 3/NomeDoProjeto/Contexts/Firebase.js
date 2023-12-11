// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5e3fACb4vuJSOUFR3kwRQPPYh8cgGNI4",
  authDomain: "nomedoprojeto-3feb8.firebaseapp.com",
  projectId: "nomedoprojeto-3feb8",
  storageBucket: "nomedoprojeto-3feb8.appspot.com",
  messagingSenderId: "514221038797",
  appId: "1:514221038797:web:85b5febebb79b44954dd84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = inicializeApp(app,{persistence: getReactNativePersistence(ReactNativeAsyncStorage)});

export {auth};