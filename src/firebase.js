import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase のコンソールでコピーした firebaseConfig の中身を、ここに貼る
const firebaseConfig = {
  apiKey: "AIzaSyByF3_qzRcUpxhkZ5uPbj54B3u26dDtZXA",
  authDomain: "my-project-b1fe2.firebaseapp.com",
  projectId: "my-project-b1fe2",
  storageBucket: "my-project-b1fe2.firebasestorage.app",
  messagingSenderId: "439152663459",
  appId: "1:439152663459:web:abf796e8f0884db488d816",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
