import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFf_qxtMbDLMbwZFBVKfioPTzR4aKuwac",
  authDomain: "coderhouse1-7301a.firebaseapp.com",
  projectId: "coderhouse1-7301a",
  storageBucket: "coderhouse1-7301a.appspot.com",
  messagingSenderId: "726104396159",
  appId: "1:726104396159:web:2aea577c37a507bd324a4a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)




