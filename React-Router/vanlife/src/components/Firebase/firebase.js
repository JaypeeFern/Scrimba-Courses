import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJlHeq7M4GrplnUNTk7yft7us010K5PMU",
  authDomain: "vanlife-a4e65.firebaseapp.com",
  projectId: "vanlife-a4e65",
  storageBucket: "vanlife-a4e65.appspot.com",
  messagingSenderId: "182069396920",
  appId: "1:182069396920:web:cc18583b038ef3c9e67b4d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)