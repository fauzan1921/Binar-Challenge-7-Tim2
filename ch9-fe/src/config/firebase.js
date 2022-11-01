import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "challenge-ch-9-tim-2.firebaseapp.com",
    projectId: "challenge-ch-9-tim-2",
    storageBucket: "challenge-ch-9-tim-2.appspot.com",
    messagingSenderId: "899231911427",
    appId: "1:899231911427:web:e349be70aac971129ec836",
};

const app = initializeApp(firebaseConfig);
