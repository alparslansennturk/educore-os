import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBimNOLcg4CmsIB4dpXF2WbIU5nY7TfevY",
  authDomain: "flexos-10ac4.firebaseapp.com",
  projectId: "flexos-10ac4",
  storageBucket: "flexos-10ac4.firebasestorage.app",
  messagingSenderId: "421929361498",
  appId: "1:421929361498:web:c9348204f583727d3a7863"
};

// Uygulama her yenilendiğinde tekrar tekrar initialize edilmesin diye kontrol ediyoruz
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };