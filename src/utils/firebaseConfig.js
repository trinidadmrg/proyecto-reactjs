import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwSxye_Qxgd-tzK_iOqTYk6geYHzxqFPA",
  authDomain: "proyecto-reactjs-coderhouse.firebaseapp.com",
  projectId: "proyecto-reactjs-coderhouse",
  storageBucket: "proyecto-reactjs-coderhouse.appspot.com",
  messagingSenderId: "949455033242",
  appId: "1:949455033242:web:fd8dc9a629a5db6d60e023",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
