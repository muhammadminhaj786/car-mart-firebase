import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

//import auth, db
import { auth,db } from "./firbaseConfig.js";

//working on login page
const login = document.getElementById('Login')
login.addEventListener('click',Login)
async function Login(){
    try{
        var email = document.getElementById('email')
        var password = document.getElementById('password')
        const userLogin = await signInWithEmailAndPassword(auth,email,password)
        console.log(userLogin)
        localStorage.setItem("userUid", userLogin.user.uid)
        window.location.replace("/dashboard.html")
    }catch(error){
        alert(error.message)
    }

}
