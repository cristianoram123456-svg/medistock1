import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAOqp78qLvKi08FR0MLm8MRw7fGu0zzXs",
  authDomain: "medistock-1687c.firebaseapp.com",
  projectId: "medistock-1687c",
  storageBucket: "medistock-1687c.firebasestorage.app",
  messagingSenderId: "139807437707",
  appId: "1:139807437707:web:f8a90a559b20d35de0758e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;