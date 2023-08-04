// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjv2vLOwDpf2OksZEQI3UFP0KBvAfFKZw",
  authDomain: "car-buy-app.firebaseapp.com",
  projectId: "car-buy-app",
  storageBucket: "car-buy-app.appspot.com",
  messagingSenderId: "1065041727439",
  appId: "1:1065041727439:web:052da06a0eabdac90e0cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initlize Auth
const auth = getAuth();

//Initlize Auth
const db = getFirestore(app)

export{
    auth,
    db
}
