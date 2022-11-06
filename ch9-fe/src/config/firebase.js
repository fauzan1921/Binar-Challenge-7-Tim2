import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhrcXHsh2XoZ1VuIhepvBOofYTHiUNci4",
  authDomain: "authentication-3bf42.firebaseapp.com",
  projectId: "authentication-3bf42",
  storageBucket: "authentication-3bf42.appspot.com",
  messagingSenderId: "345446161095",
  appId: "1:345446161095:web:232d46abb98c4592e7fce2",
  measurementId: "G-D2ZQZCMCFS",
  databaseURL: "https://database-3325c-default-rtdb.firebaseio.com"
}
  const app = initializeApp(firebaseConfig)
export const authFirebase = getAuth(app);
export const database = getDatabase(app);
