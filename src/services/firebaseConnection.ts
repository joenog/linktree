import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCNC_lIVHsdcL3lmF8HL_7o9D02psM0Chg",
  authDomain: "treelink-5c4e0.firebaseapp.com",
  projectId: "treelink-5c4e0",
  storageBucket: "treelink-5c4e0.firebasestorage.app",
  messagingSenderId: "346048825329",
  appId: "1:346048825329:web:1ab8b20cdd1dd4ac986650"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }