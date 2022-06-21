// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "tes-medium.firebaseapp.com",
  projectId: "tes-medium",
  storageBucket: "tes-medium.appspot.com",
  messagingSenderId: "684926218097",
  appId: "1:684926218097:web:18fa6e732b72b27d5c90d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
