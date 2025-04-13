import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_I,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }


/*
const firebaseConfig = {
  apiKey: "AIzaSyCNC_lIVHsdcL3lmF8HL_7o9D02psM0Chg",
  authDomain: "treelink-5c4e0.firebaseapp.com",
  projectId: "treelink-5c4e0",
  storageBucket: "treelink-5c4e0.firebasestorage.app",
  messagingSenderId: "346048825329",
  appId: "1:346048825329:web:1ab8b20cdd1dd4ac986650"
};

*/