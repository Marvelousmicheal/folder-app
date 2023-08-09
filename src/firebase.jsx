// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyXWqU10kq_PSiW2YjptGESt5_Teo-ELw",
  authDomain: "file-management-f9505.firebaseapp.com",
  projectId: "file-management-f9505",
  storageBucket: "file-management-f9505.appspot.com",
  messagingSenderId: "468209588722",
  appId: "1:468209588722:web:fe3ee932efcecb67deb36b",
  measurementId: "G-0XWRMPPD2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;
