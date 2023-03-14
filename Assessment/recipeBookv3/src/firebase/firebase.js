import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4UXasB0WivhcUrV9MV1oltLIA5po66Sk",
  authDomain: "groupxs-assessment.firebaseapp.com",
  projectId: "groupxs-assessment",
  storageBucket: "groupxs-assessment.appspot.com",
  messagingSenderId: "486440780073",
  appId: "1:486440780073:web:28dda0fe05ee3fb862f738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)