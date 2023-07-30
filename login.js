  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import {  getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.j";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  //Initilize auth
  const auth = getAuth()

  const userLogin = document.getElementById('loginBtn')
  userLogin.addEventListener('click',Login )

  // create a login function
  async function Login(e){
    try{

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        console.log(email, password)
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(userLogin)
        localStorage.setItem("userUid", userLogin.user.uid)
        window.location.replace("/dashboard.html")
    }catch(error){
        console.log(error.message)
    }
  }
