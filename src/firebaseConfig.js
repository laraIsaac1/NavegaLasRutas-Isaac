import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1nYhMdSXHUboMVf0YheHQ442HJRVlues",
  authDomain: "friar-backend.firebaseapp.com",
  projectId: "friar-backend",
  storageBucket: "friar-backend.firebasestorage.app",
  messagingSenderId: "421495730333",
  appId: "1:421495730333:web:6f87f4f739cf9ab94fa474",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
