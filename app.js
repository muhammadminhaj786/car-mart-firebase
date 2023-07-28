
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
  
  const signupBtn = document.querySelector("#signinBtn")
signupBtn.addEventListener("click", signUp)

async function signUp(e) {
    try {
        const fullName = document.getElementById("fullName").value
        const phoneNumber = document.getElementById("phoneNumber").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        const userAuth = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userAuth.user.uid)
        const uid = userAuth.user.uid
        const userObj = {
            fullName,
            phoneNumber,
            email,
            accountActivate: true,
            uid
        }
        console.log("userObj", userObj)
        const userRef = doc(db, "users", uid);
        const userDB = await setDoc(userRef, userObj)
        console.log("userDB", userDB)

        window.location.assign("/")




    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }

}